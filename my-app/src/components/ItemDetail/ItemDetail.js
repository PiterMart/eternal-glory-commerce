import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import CartContext from "../../context/cartContext";
import NotificationContext from "../../context/NotificationContext";

export const Count = ({ onConfirm, maxQuantity }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < maxQuantity) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      this.count = Math.max(0)
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
    setNotification("succes", `Added  ${count} ` + product?.name + ' to the cart');
    console.log("added " + count + " " + product?.name);
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
        <div className="Buttons">
          <Link to={'/cart'} className='link'><button>Go to Cart</button></Link>
          <Link to={'/releases'} className='link'><button>Back to Catalog</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;