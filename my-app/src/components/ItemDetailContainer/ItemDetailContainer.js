import React from 'react'
import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
// import { getProductById } from '../../products'
import { useParams } from 'react-router-dom'
import {getDoc, doc, querySnapshot} from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [inputType, setInputType] = useState('input')
    const [loading, setLoading] = useState(true)
    
    const {paramId} = useParams()

  

    useEffect(() => {
        
        setLoading(true)
        getDoc(doc(db, 'items', paramId)).then((querySnapshot) => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(product)
        }).catch((error) => {
            console.log('error searching item', error)
        }).finally(() =>{
            setLoading(false)
        })


        return (() => {
            setProduct()
        })
        
    }, [paramId])

    if(loading) return <><img src={'../../assets/loading.gif'} alt="Loading.."></img></>



    return(
        <div className='ItemDetailContainer'>
            <ItemDetail product={product} inputType={inputType}/>
        </div>
    )
}

export default ItemDetailContainer