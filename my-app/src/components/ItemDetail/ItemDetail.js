import { useState, useContext } from "react";
import "./ItemDetail.css";
import CartContext from "../../context/cartContext";
import NotificationContext from "../../context/NotificationContext";

export const Count = ({ onConfirm, maxQuantity }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < maxQuantity) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counterContainer">
      <div className="count">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={() => onConfirm(count)}>Add to cart</button>
      </div>
    </div>
  );
};

const ItemDetail = ({ product,}) => {

  const { setNotification } = useContext(NotificationContext);
  const { addItem } = useContext(CartContext);

  const addToCart = (count) => {
    addItem(product, count);
    setNotification("succes", `Agregado al carrito ${count} ` + product?.name);
    console.log("hello se agrego " + count + " " + product?.name);
  };

  return (
    <div className="CardItem">
      <picture>
        <img src={product?.img} alt={product?.name} className="ItemImg" />
      </picture>
      <div className="userInterface">
        <header className="Header">
          <h2 className="ItemHeader">{product?.type} [{product?.name}]</h2>
        </header>
        <section>
          <h4 className="Info">{product?.description}</h4>
          <h4 className="Info">$ {product?.price}</h4>
        </section>
        <footer className="ItemFooter">
          <Count onConfirm={addToCart} maxQuantity={product?.stock} />
        </footer>
      </div>
    </div>
  );
};

export default ItemDetail;