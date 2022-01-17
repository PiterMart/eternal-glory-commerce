import { useState, useContext } from 'react'
import './ItemDetail.css'
import loading from '../../assets/loading.gif'

// import { CartContext } from '../../context/cartContext'
// import NotificationContext from '../../context/NotificationContext'


const InputCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const handleChange = ({target}) => {
        if(target.value <= maxQuantity && target.value >= 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < maxQuantity) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
      <div className='counterContainer'>
          <div className='count'>
              <button onClick={decrement}>-</button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
              <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
          </div>
      </div>
    )
}

const ItemDetail = ({ product, inputType = 'input' }) => {
    // const value = useContext(CartContext)
    //     console.log(value)

  const Count = inputType === 'input' ? InputCount : ButtonCount

//   const {setNotification} = useContext(NotificationContext)

//   const addToCart = (count) => {
//     setNotification('succes', `Agregado al carrito ${count}`)     
//   }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product?.name}
                </h2>
            </header>
            <picture>
                <img src={product?.img} alt={product?.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    {product?.description}
                </p>
                <p className="Info">
                    $ {product?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
             {/* <Count onConfirm={addToCart} maxQuantity={product?.stock}/> */}
             <Count maxQuantity={product?.stock}/>
            </footer>
        </article>
    )
}

export default ItemDetail