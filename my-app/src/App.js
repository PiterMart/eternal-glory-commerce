import "./App.css"
import React, { useEffect, useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/NavBar/NavBar"
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import background from "./assets/animacionGirl.mp4"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// import UserContext from './context/userContext'
// import Notification from './context/NotificationContext'
// import { NotificationContextProvider } from "./context/NotificationContext"
// import PrivateRoute from './components/PrivateRoute/PrivateRoute'
// import Login from './components/Login/Login'
// import ItemCount from "./components/ItemCount/ItemCount"
// import { UserContextProvider } from "./context/userContext"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from "./components/ItemDetail/ItemDetail"


const App = () => {
//   const { login } = useContext(UserContext)

//   useEffect(() => {
//     const loggedUserJSON = window.localStorage.getItem('user')
//     console.log(loggedUserJSON)
//     if(loggedUserJSON) {
//       const objUser = JSON.parse(loggedUserJSON)
//       console.log(objUser)
//       login(objUser)
//     }
//   }, [])
  return (
    <div className="App">
       {/* <UserContextProvider>
        <NotificationContextProvider> */}
          <BrowserRouter>
              <Nav />
              <video autoPlay loop muted>
                <source src={background} type="video/mp4" />
              </video>
              {/* <ItemListContainer/> */}
              {/* <Notification/> */}
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='category/:categoryId' element={<ItemListContainer/>} />
                <Route path='detail/:paramId' element={<ItemDetailContainer />} />
                {/* <Route path='count' element={<ItemCount/>} />
                <Route path='login' element={<PrivateRoute><Login /></PrivateRoute>} />  */}
              </Routes>
          </BrowserRouter>
        {/* </NotificationContextProvider>
      </UserContextProvider>*/}
    </div>
  );
}

export default App;
