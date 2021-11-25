import React , { createContext, useReducer } from 'react';

// 1. Crear el contexto
const CartContext = createContext();

// 2. Reducer e initialState
const initialState = {
    items: []
};

const reducer = (state, action) => {
    
    switch(action.type) {
        case 'Item/Add':
            if(state.items.find(p => p.id === action.payload.id)) {
                return {
                    ...state,
                    items: state.items.map(p => p.id === action.payload.id ? ({
                        ...p,
                        cantidad: p.cantidad + 1  
                      }) : p)               
                };
            }

            return {
                ...state,
                items: state.items.concat({
                    ...action.payload,
                    cantidad: 1                    
                })
            }
        
        case 'Item/Remove':
            return {
                ...state,
                items: state.items.filter(p => p.id !== action.payload.id)
            }

        default:
            return state;    
    }
    
};

// 3. Provider
const CartProvider = ({ children }) => {
    const [cartInfo, dispatchCart] = useReducer(reducer, initialState);

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