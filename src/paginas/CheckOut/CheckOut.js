import { useContext } from "react";
import { Navigate } from "react-router";

import CartContext from "../../contextos/CartContext";

import Encabezado from "../../componentes/Encabezado";

import './CheckOut.css';

const CheckOut = () => {
    const {cartInfo} = useContext(CartContext);
    const {items} = cartInfo;
    let cantidadPedido = 0;
    let totalPedido = 0;

    if(items.length === 0) return <Navigate to="/" />

    cantidadPedido = items.map(producto => producto.cantidad).reduce((valorAnterior,valorSiguiente) => valorAnterior + valorSiguiente);
    totalPedido = items.map(producto => producto.cantidad * producto.precio).reduce((valorAnterior,valorSiguiente) => valorAnterior + valorSiguiente);

    
    console.log({cantidadPedido,totalPedido});

    return (
        <div className="view-checkout">
            <div className="row">
                <div className="col-12">
                    <Encabezado />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-12">
                    <h3 className>Detalle de su pedido</h3>
                </div>
                <div className="col-12">
                    <table className="table table-striped table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col" className="text-right">#</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Nombre</th>
                                <th scope="col" className="text-right">Precio</th>
                                <th scope="col" className="text-right">Cantidad</th>
                                <th scope="col" className="text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.length > 0 && items.map(producto => 
                                <tr key={producto.id}>
                                    <th scope="row" className="text-right">{producto.id}</th>
                                    <td>
                                        <img src={producto.img} alt={producto.id} className="img-fluid" />
                                    </td>
                                    <td>{producto.nombre}</td>
                                    <td className="text-right">${producto.precio}</td>
                                    <td className="text-right">{producto.cantidad}</td>
                                    <td className="text-right">${producto.cantidad * producto.precio}</td>
                                </tr>                                
                            )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4">Totales</td>
                                <td className="text-right">{cantidadPedido}</td>
                                <td className="text-right">${totalPedido}</td>
                            </tr>
                        </tfoot>
                    </table>                    
                </div>
            </div>
        </div>      
    )
};

export default CheckOut;