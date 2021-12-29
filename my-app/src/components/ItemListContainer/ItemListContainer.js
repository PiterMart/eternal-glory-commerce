import React from "react";
import  { useState, useEffect } from 'react'
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../products";
import { useParams } from "react-router-dom";
import loading from '../../assets/loading.gif'


const ItemListContainer = ()=> {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [isLoading, setIsLoading] = useState([])

  useEffect(() => {        
      getProducts(categoryId).then(item => {
          setProducts(item)
          setIsLoading(false)
      }).catch(err  => {
          console.log(err)
      })

      return (() => {
          setProducts([])
      })
      
  }, [categoryId])
  if(isLoading) return <><img src={loading} alt="Loading.."></img></>

  return (
      <div className="ItemListContainer">
          <ItemList  products={products}/>
      </div>
  )    
  
}

export default ItemListContainer