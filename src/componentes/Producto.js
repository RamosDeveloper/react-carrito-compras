import { useContext } from "react";

import CartContext from './../contextos/CartContext';

const Producto = ({producto}) => {
    const {dispatchCart} = useContext(CartContext);

    const addProductToCart = (producto) => {
        dispatchCart({
            type: 'Item/Add',
            payload: producto
        });
    }

    return (
        <div className="card card-producto my-3 position-relative">
            <div className="card-body">
                <div className="img-container">
                    <img src={producto.img} alt={producto.id} className="img-fluid" />
                </div>
                <div className="text-center">
                    <h2 className="text-center">{producto.nombre}</h2> 
                    <code className="precio">${producto.precio}</code> 
                </div>              
            </div>
            <div className="add-product-bubble" onClick={() => addProductToCart(producto)}>
                <i className="fas fa-cart-plus"></i>
            </div> 
        </div>
    )
};

export default Producto;