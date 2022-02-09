import React from "react";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
import "./Cart.css"
import { Link } from "react-router-dom";


const CartDisplay = () => {
    
   const cart = useContext(CartContext);
   const { removeItem, cleanCart, confirmOrder } = useContext(CartContext);


    return(
        <div className="Cart">
            <h1>Shopping Cart</h1>
            <table>
                <tbody>
                {cart.cart.map(product => {
                        return (
                            <tr key={product.item.id}>
                                <td><img src={product.item.img} alt={product.item.name}></img></td>
                                <td>{product.item.name}</td>
                                <td>{product.quantity}</td>
                                <td>${product.item.price}</td>
                                <td><button onClick={removeItem.bind(this,product.item.id)}>Delete</button></td>
    
                            </tr>
                        )
                })}
                </tbody>
                <button onClick={confirmOrder}>BUY</button>
            </table>
            <div className="Buttons">
            <button onClick={cleanCart}>Clear Cart</button>
            <Link to={'/releases'} className='link'><button>Keep Shopping</button></Link>
            </div>

        </div>
    )
}

export default CartDisplay;