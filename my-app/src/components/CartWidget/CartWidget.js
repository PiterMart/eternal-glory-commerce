import React from 'react';
import '../../assets/shoppingCartWhite.png';
import './CartWidget.css';



const CartWidget = () => {

    return(

        <div className='cartWidget'>
            <p>0</p>
            <img src={require('../../assets/shoppingCartWhite.png') } alt="Cart"></img>
        </div>
    )
}

export default CartWidget;
