import React from 'react'
import './NavBar.css'
import { useEffect, useState, useContext } from 'react'
import '../../assets/eternal logo small.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { getCategories } from '../../products'

const Nav = () => {

    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories =>{
            setCategories(categories)
        })
    },[])

    return(
        <div className="Nav">
            <div className='menu'>
                <ul>
                    <li><Link to={'/'} className='link'><img src={require("../../assets/eternal logo small.png")} alt='Home'></img></Link></li>
                    <Link to={'releases'} className='link'>Catalog</Link>
                    <li className="Categories">
                        {categories.map(cat => <Link key={cat.id} className='Option' to={`/category/${cat.id}`}>{cat.description}</Link>)}
                    </li>
                    <CartWidget/> 
                </ul>
            </div>
        </div>
    )
}

export default Nav;