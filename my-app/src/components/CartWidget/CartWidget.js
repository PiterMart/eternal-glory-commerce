import React from 'react';
import '../../assets/shoppingCartWhite.png';
import './CartWidget.css';



const CartWidget = () => {

    return(

        <button className='cartWidget'>
            <p>0</p>
            <img src={require('../../assets/shoppingCartWhite.png') } alt="Cart"></img>
        </button>
    )
}

export default CartWidget;
