import React, {useState, createContext}from 'react'


const CartContext = React.createContext([])


export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState('')
    const [totalQuantity, setTotalQuantity] = useState('')

    const addItem = (item, quantity) => {
        console.log(item);
        const flag = isInCart(item);
        console.log(flag);
        if (flag) {
            const repeatedProduct = cart.find(element => element.item === item);
            repeatedProduct.quantity += quantity;
            let unrepeatedCart = cart.filter (element => element !== item)
            setCart([...unrepeatedCart, repeatedProduct])

        } else{
            setCart(...cart, {item: item, quantity: quantity});
        }
    }
    const isInCart = (item) => {
        return cart.some(product => product.item === item)

    }
    const removeItem = (item) => {

    }
    const cleanCart = () => {

    }


    return (
        <CartContext.Provider value={{
            cart, quantityt: {
                addItem,
            },
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;