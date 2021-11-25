import { useContext } from "react";

import CartContext from "../contextos/CartContext";

const ProductoCarro = ({producto}) => {
    const {dispatchCart} = useContext(CartContext);

    const RemoveProductToCart = (producto) => {
        dispatchCart({
            type: 'Item/Remove',
            payload: producto
        });
    }

    return (
        <div className="list-group-item">
            <div className="d-flex align-items-center justify-content-between list-producto">
                <img src={producto.img} className="img-fluid" alt={producto.id}></img>
                <span className="descripcion">{producto.nombre}</span>
                <span className="cantidad">{producto.cantidad}</span>
                <code className="precio">${producto.precio}</code>
                <button className="btn btn-danger" onClick={() => {RemoveProductToCart(producto)}}>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>            
        </div>
    )
};

export default ProductoCarro;