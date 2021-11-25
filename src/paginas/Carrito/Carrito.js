import { useContext } from "react";
import { Navigate } from "react-router";

import CartContext from "../../contextos/CartContext";

import Encabezado from "../../componentes/Encabezado";

import ProductoCarro from "../../componentes/ProductoCarro";

import './Carrito.css';

const Carrito = () => {
    const {cartInfo} = useContext(CartContext);
    const {items} = cartInfo;

    if(items.length === 0) return <Navigate to="/" />

    return (
        <div className="carro">
            <div className="row">
                <div className="col-12">
                    <Encabezado />
                </div>
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12">
                        <h3 className>Productos en tu carro</h3>
                    </div>
                </div>                
                <div className="row">
                    <div className="col-12">
                        <div className="list-group">
                            {items.map(producto => 
                                <ProductoCarro key={producto.id} producto={producto} />    
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Carrito;