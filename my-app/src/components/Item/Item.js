import "./Item.css"
import { Link } from "react-router-dom"
import {useEffect, useState} from "react"


const TestComponent = (product) => {

    const DetailButton = () =>{

        function doSomething() {
        }return <Link to={`/detail/${product.id}`}><button onClick={doSomething}>See Detail</button></Link>
                
    }

    useEffect(() => {
        return () => {
        }
    }, [])
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
                <div className={show ? 'show' : 'hide'}><TestComponent id={product.id} /></div>
            </section>           
        </article>
    )
}


export default Item
