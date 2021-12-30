import React from 'react'
import './NavBar.css'
import { useEffect, useState, useContext } from 'react'
import '../../assets/eternal logo small.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { getCategories } from '../../products'
// import UserContext from '../../context/userContext'
// import NotificationContext from '../../context/NotificationContext'



const Nav = () => {
    const [categories, setCategories] = useState([])
    // const { user, logout} = useContext(UserContext)
    // const { setNotification} = useContext(NotificationContext)

    useEffect(() => {
        getCategories().then(categories =>{
            setCategories(categories)
        })
    },[])

    // const handleLogout = () => {
    //     logout()
    //     setNotification('error', `Hasta luego ${user}`)
    // }

    return(
        <div className="Nav">
            <ul>
                <li><img src={require("../../assets/eternal logo small.png")} alt='Home'></img></li>
                <Link to={'/'} className='link'>Releases</Link>
                <li className="Categories">
                    {categories.map(cat => <Link key={cat.id} className='Option' to={`/category/${cat.id}`}>{cat.description}</Link>)}
                </li>
                {/* {
                    user ?
                    <button onClick={handleLogout} className='Option'>Logout</button>
                    : <Link to='/login' className='Option'>Login</Link>
                }     */}
                
                
                <CartWidget/>
                
            </ul>

        </div>
        
    )
}

export default Nav;