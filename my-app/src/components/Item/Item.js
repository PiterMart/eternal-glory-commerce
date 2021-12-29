import "./Item.css"
import { Link } from "react-router-dom"
import {useEffect, useState} from "react"


const TestComponent = (product) => {

    const DetailButton = () =>{

        function doSomething() {
            console.log(`ver detalle ${product.id}`)
        }return <Link className='ButtonDetail' to={`/detail/${product.id}`}>Ver detalle</Link>
                
    }

    useEffect(() => {
        console.log('el componente se monto')
        return () => {
            console.log('el componente se va a desmontar')
        }
    }, [])
    console.log('el componente se va a montar')
    return(
        <div>
            <DetailButton/>
        </div>
    )
}

const Item = ({ product, }) => {

    const[show, setShow] = useState(false)

    const handleClick = (evt) => {
        evt.stopPropagation()
        console.log(`hice click en Item ${product.id}`)

    }

    return (
        <article className="Item" onClick={handleClick} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <header>
                <h2>
                  {product.name}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {product.category}
                </p>
                <p className="Info">
                    Precio: {product.price}
                </p>
                <p> 
                    Stock: {product.stock}
                </p>
                {show && <TestComponent id={product.id}/>}
            </section>           
        </article>
    )
}


export default Item
