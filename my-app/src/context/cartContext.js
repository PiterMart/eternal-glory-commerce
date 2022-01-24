import React, { useState, createContext, useEffect, useCallback } from "react";

const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    console.log('hola')
    console.log(quantity)
    const flag = isInCart(item);
    if (flag) {
      let repeatedProduct = cart.find((element) => element.item === item);
      const newObject = {
        item: repeatedProduct.item,
        quantity: Number(repeatedProduct.quantity),
      };
      newObject.quantity += Number(quantity);
      let auxiliarCart = cart.filter((element) => element.item !== item);
      setCart([...auxiliarCart, newObject]);
      console.log(auxiliarCart)
    } else {
      setCart((prevState) => {
        const result = [
          ...prevState,
          { item: item, quantity: Number(quantity)},
        ];
        return result;
      });
    }
    console.log(flag);
    console.log(cart)
    console.log(cart)
  };

  const isInCart = (item) => {
    console.log(item);
    return cart.some((product) => product.item === item);
  };

  const memoizedAddAll = useCallback(() => {
    const addAll = () => {
      const totalQuantityArray = cart.map((item) => Number(item.quantity));
      const totalSum = totalQuantityArray.reduce((a, b) => {
        return a + b;
      }, 0);
      setTotalQuantity(totalSum);
    };
    addAll();
  }, [cart]);

  useEffect(() => {
    memoizedAddAll();
  }, [cart, memoizedAddAll]);

  

  const removeItem = (item) => {
    console.log(item)
      let repeatedProduct = cart.find((element) => element.item.id === item);
      console.log('here is repeated' + repeatedProduct)
      console.log(cart[0].item.id)
      const newObject = {
        item: repeatedProduct.item,
        quantity: Number(repeatedProduct.quantity),
      };
      if (repeatedProduct.quantity <= 1){
        let auxiliarCart = cart.filter((element) => element.item === item);
        setCart([...auxiliarCart])
      }else {
        newObject.quantity -= 1;
      let auxiliarCart = cart.filter((element) => element.item === item);
      console.log('here is auxiliar' + auxiliarCart)
      setCart([...auxiliarCart, newObject]);
      console.log(cart)
      }

    }

  const cleanCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
          totalQuantity,
          addItem,
          removeItem,
          cleanCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;