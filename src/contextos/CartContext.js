import React , { createContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';

// 1. Crear el contexto
const CartContext = createContext();

// 2. initialState
const initialState = {
    items: [],
    cantidad: 0,
    total: 0
};

// 3. Provider
const CartProvider = ({ children }) => {
    const [cartInfo, dispatchCart] = useReducer(cartReducer, initialState);

    const pasamelabebe = {
        cartInfo,
        dispatchCart
    };

    return (
        <CartContext.Provider value={pasamelabebe}>
            { children }
        </CartContext.Provider>
    )
};

export { CartProvider };
export default CartContext;