import { collectionGroup } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
import "./Cart.css"
import { Count } from "../ItemDetail/ItemDetail";


const CartDisplay = () => {
    
   const cart = useContext(CartContext)
   console.log(cart)

    return(
        <div className="Cart">
            <h1>Shopping Cart</h1>
            <table>
                <tbody>
                {cart.cart.map(product => {
                    return (
                        <tr key={product.item.id}>
                            <td><img src={product.item.img} alt="product image"></img></td>
                            <td>{product.item.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.item.price}</td>
                            <td><button>Delete</button></td>

                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default CartDisplay;