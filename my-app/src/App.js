import React from "react"
import "./App.css"
// import React, { useEffect, useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/NavBar/NavBar"
import background from "./assets/animacionGirl.mp4"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Welcome from "./components/Welcome/Welcome"
// import Notification from './context/NotificationContext'
// import { NotificationContextProvider } from "./context/NotificationContext"
// import ItemDetail from "./components/ItemDetail/ItemDetail"
// import { CartContext } from "./context/cartContext"


const App = () => {
  return (
    <div className="App">
        {/* <NotificationContextProvider> */}
          {/* <CartContext.Provider value={''}> */}
            <BrowserRouter>
                <Nav />
                {/* <Notification/> */}
                <video autoPlay loop muted>
                  <source src={background} type="video/mp4" />
                </video>
                <Routes>
                  <Route path='/' element={<Welcome/>}/>
                  <Route path='releases' element={<ItemListContainer/>}/>
                  <Route path='category/:categoryId' element={<ItemListContainer/>} />
                  <Route path='detail/:paramId' element={<ItemDetailContainer />} />
                </Routes>
            </BrowserRouter>
          {/* </CartContext.Provider> */}
        {/* </NotificationContextProvider> */}
    </div>
  );
}

export default App;
