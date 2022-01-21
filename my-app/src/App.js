// import React from "react"
import "./App.css"
import React, { useEffect, useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/NavBar/NavBar"
import background from "./assets/animacionGirl.mp4"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Welcome from "./components/Welcome/Welcome"
import Notification from './components/Notification/Notification'
import { NotificationContextProvider } from "./context/NotificationContext"
// import ItemDetail from "./components/ItemDetail/ItemDetail"
import  {CartContextProvider}  from './context/cartContext'
import Cart from "./components/Cart/Cart"


const App = () => {
  return (
    <div className="App">
        <NotificationContextProvider>
          <CartContextProvider>
            <BrowserRouter>
            <Notification />
                <Nav />
                <video autoPlay loop muted>
                  <source src={background} type="video/mp4" />
                </video>
                <Routes>
                  <Route path='/' element={<Welcome/>}/>
                  <Route path='releases' element={<ItemListContainer/>}/>
                  <Route path='category/:categoryId' element={<ItemListContainer/>} />
                  <Route path='detail/:paramId' element={<ItemDetailContainer />} />
                  <Route path='Cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </NotificationContextProvider>
    </div>
  );
}

export default App;
