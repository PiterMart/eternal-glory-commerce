import React, { useState, createContext, useEffect, useCallback, useContext } from "react";
import { addDoc, collection, doc, DocumentSnapshot, Timestamp, updateDoc, writeBatch, getDoc } from "firebase/firestore";
import { db } from "../services/firebase/firebase";
import NotificationContext from "./NotificationContext";
const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [processingOrder, setProcessingOrder] = useState(false)
  const setNotification = useContext(NotificationContext)
  const [contact, setContact] = useState({
    phone: '',
    adress: '',
    comment: '',
    date: ''
  })

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
          { item: item, quantity: Number(quantity)},
        ];
        return result;
      });
    }
  };

  const isInCart = (item) => {
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
      let repeatedProduct = cart.find((element) => element.item.id === item);
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
      setCart([...auxiliarCart, newObject]);
      }

    }

  const cleanCart = () => {
    setCart([])
  }

  const confirmOrder = () => {
    setProcessingOrder(true)

    const objOrder = {
        items: cart,
        // total: getTotal(),
        adress: contact.adress,
        comment: contact.comment,
        date: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)
    const outOfStock = []

    objOrder.items.forEach(async (prod) => {
      const docRef = doc(db, "items", prod.item.id)
      getDoc(docRef).then(documentSnapshot => {
        if(documentSnapshot.data().stock >= prod.quantity){
         const newStock = documentSnapshot.data().stock - prod.quantity;
          batch.update(docRef, {
            stock: newStock
          });
          batch.commit()
            .then(() => {console.log('hello batch updated')}, setCart([]))        
        }
         else {
          outOfStock.push({id: documentSnapshot.id, ...documentSnapshot})
        }
      
      })
      

    if(outOfStock.length === 0) {
      addDoc(collection(db, 'orders'), objOrder).then(({id}) =>{
        batch.commit().then(() => {
          setNotification('success', 'El id  de su orden es:', id)
        })
      }).catch((error) => {
        setNotification('error', 'Error ejecutando la orden')
      })
    }

    })
    
}


  return (
    <CartContext.Provider
      value={{
        cart,
          totalQuantity,
          addItem,
          removeItem,
          cleanCart,
          confirmOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;