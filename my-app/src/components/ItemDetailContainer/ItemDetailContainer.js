import React from 'react'
import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from '../../products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [inputType, setInputType] = useState('input')
    
    const {paramId} = useParams()

  

    useEffect(() => {
        getProductById(paramId).then(item => {
            setProduct(item)
        }).catch(err =>{
            console.log(err)
        })
        return (() => {
            setProduct()
        })
        
    }, [paramId])


    return(
        <div className='ItemDetailContainer'>
            <button onClick={() => setInputType('input')}>Input</button>
            <button onClick={() => setInputType('button')}>Button</button>
            <ItemDetail product={product} inputType={inputType}/>
        </div>
    )
}

export default ItemDetailContainer