import React from "react";
import  { useState, useEffect } from 'react'
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";  
import { useParams } from "react-router-dom";
import loading from '../../assets/loading.gif'
import { db } from "../../services/firebase/firebase";
import { collection, getDocs, query, where} from 'firebase/firestore'


const ItemListContainer = ()=> {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()
  const [isLoading, setIsLoading] = useState([])

  useEffect(() => {        
      if(!categoryId){
        getDocs(collection(db,'items'))
        .then((querySnapshot) => {
            // console.log(querySnapshot)
            const products = querySnapshot.docs.map(doc => {
                // console.log(doc)
                return{ id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
        .catch((error)  => {
            console.log('error searching items',error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    } else{
        getDocs(query(collection(db,'items'), where('category', '==', categoryId)))
        .then((querySnapshot) => {
            // console.log(querySnapshot)
            const products = querySnapshot.docs.map(doc => {
                // console.log(doc) 
                return{ id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
        .catch((error)  => {
            console.log('error searching items',error)
        })
        .finally(() => {
            setIsLoading(false)
        })

    }
      
      return (() => {
          setProducts([])
      })
      
  }, [categoryId])
  if(isLoading) return <><img src={loading} alt="Loading.."></img></>

  return (
      <div className="ItemListContainer">
          <h1>All Eternal Glory wares</h1>
          <ItemList  products={products}/>
      </div>
  )    
  
}

export default ItemListContainer