import React, {useState, createContext}from 'react'


const CartContext = React.createContext([])

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addItem = (item, quantity) => {
        console.log(item);
        const flag = isInCart(item);
        if (flag) {
            let repeatedProduct = cart.find(element => element.item === item);
            repeatedProduct.quantity += quantity;
            let auxiliarCart = cart.filter(element => element.item !== item);
            setCart([...auxiliarCart, repeatedProduct])
        } else {
            setCart([...cart, {item: item, quantity: quantity}]);
        }
        addAll();
        console.log(flag);  
    }
    const isInCart = (item) => {
        console.log(item);
        return cart.some(product => product.item === item);
    }
    const addAll = () => {
        console.log('adding')
        cart.forEach(element => {
            setTotalQuantity (totalQuantity + element.quantity)
        })
    }
    // const removeItem = (item) => {

    // }
    // const cleanCart = () => {

    // }


    return (
        <CartContext.Provider value={{
            cart, quantity: {
                totalQuantity,
                addItem,
            },
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;