import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { Navigate } from "react-router";

import UserContext from "../contextos/UserContext";
import CartContext from '../contextos/CartContext';

const Encabezado = () => {
    const {userInfo} = useContext(UserContext);
    const {cartInfo} = useContext(CartContext);
    const {items} = cartInfo;

    if(userInfo === null ) return <Navigate to="/inicio" />

    return (
        <header className="bg-danger py-3 position-relative">
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container-fluid">
                    <span className="navbar-brand">React Tienda</span>                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
                            </li>
                        </ul>
                        <small className="text-white">Bienvenido: <strong className="fst-italic">{userInfo.nombre}</strong></small>
                        <span className="navbar-text"> 
                                                      
                            <NavLink className="nav-link position-relative" to="/cart">
                                <i className="fas fa-shopping-cart"></i>
                                { items.length > 0 &&
                                    <span className="position-absolute top-5 start-75 translate-middle badge rounded-pill bg-warning">
                                        {items.length}
                                    </span>                                  
                                }                                  
                            </NavLink>                            
                        </span>
                    </div>
                </div>
            </nav>            
        </header>  
    )
};

export default Encabezado;