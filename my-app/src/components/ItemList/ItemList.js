import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ products = []}) => {
    return (
        <div className='ItemList'>
            {products.map(product =><Item key={product.id} product={product}/> )}
        </div>
    )
}

export default ItemList