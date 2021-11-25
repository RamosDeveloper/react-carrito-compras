import React , { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { Navigate } from "react-router";

import UserContext from "./contextos/UserContext";

import Home from "./paginas/Home/Home";
import Login from "./paginas/Login/Login";
import Carrito from "./paginas/Carrito/Carrito";
import CheckOut from "./paginas/CheckOut/CheckOut";

import './App.css';

const App = () => {
  const {userInfo} = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={(userInfo ? <Home /> : <Navigate to="/login" />)} />
        <Route path="/login" element={ <Login /> } />
        <Route path="/cart" element={ <Carrito /> } />
        <Route path="/checkout" element={ <CheckOut /> } />
      </Routes>
    </div>
  )
}

export default App;