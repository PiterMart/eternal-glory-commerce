import React, { useState, createContext, useEffect, useCallback } from "react";

const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
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
    } else {
      setCart((prevState) => {
        const result = [
          ...prevState,
          { item: item, quantity: Number(quantity) },
        ];
        return result;
      });
    }
    console.log(flag);
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

  // const removeItem = (item) => {

  // }
  // const cleanCart = () => {

  // }

  return (
    <CartContext.Provider
      value={{
        cart: {
          totalQuantity,
          addItem,
        },
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;