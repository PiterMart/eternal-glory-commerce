// import { useState, useContext } from 'react'
// import './Login.css'
// import UserContext from '../../context/userContext'
// import NotificationContext from '../../context/NotificationContext'
// import { useNavigate } from 'react-router-dom'


// const Login = () => {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const { login } = useContext(UserContext)
//     const { setNotification } = useContext(NotificationContext)
//     const navigate = useNavigate()

//     const handleLogin = (event) => {
//         event.preventDefault()

//         const objUser = {
//             username,
//             password
//         }

//         login(objUser)
//         setNotification('success', `Bienvenido ${objUser.username}`)
//         navigate('/')
//     }

//     return (
//         <div className='LoginContainer'>
//           <h3>Log In</h3>
//           <form onSubmit={handleLogin} className='LoginForm'>
//             <label className='LabelLogin'>
//                 Usuario
//               <input
//                 className='InputLogin'
//                 type='text'
//                 value={username}
//                 onChange={({ target }) => setUsername(target.value)}
//               />
//             </label>
//             <label className='LabelLogin'>
//                 Contraseña
//               <input
//                 className='InputLogin'
//                 type='password'
//                 value={password}
//                 onChange={({ target }) => setPassword(target.value)}
//               />
//             </label>
//             <div className='LabelLogin'>
//                 <button type='submit' className='Button'>Login</button>
//             </div>
//           </form>
//         </div>
//       )
// }

// export default Login