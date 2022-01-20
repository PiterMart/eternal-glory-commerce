import React from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import '../../assets/shoppingCartWhite.png';
import './CartWidget.css';
import  CartContext  from '../../context/cartContext';


const CartWidget = () => {
    const {quantity, setQuantity} = useContext(CartContext)
    

    return(

        <div className='cartWidget'><Link to={'Cart'} className='link'>
            <p>{CartWidget.quantity}</p>
            <img src={require('../../assets/shoppingCartWhite.png') } alt="Cart"></img>
            </Link>
        </div>
    )
}

export default CartWidget;
