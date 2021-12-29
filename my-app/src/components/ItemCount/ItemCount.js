import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({initial = 0, stock = 0, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 0) {
           setQuantity(quantity - 1)
       }     
   }
   
   return(
       <div align="center">          
           <table >
               <tbody>
                   <tr>
                       <td><button className="Button" onClick={()=> decrement() }>-</button></td>
                       <span>{quantity}</span>
                       <td ><button className="Button" onClick={() => increment() }>+</button></td>
                   </tr>
                   <tr>
                       <td align="center" colSpan="5"><button className="Button" onClick={()=> console.log('Se agrego al carrito')}>Agregar al carrito</button></td>
                   </tr>
               </tbody>
           </table>       
       </div>
   )

}
export default ItemCount