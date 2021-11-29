import cartTypes from '../types/cartTypes';

const cartReducer = (state, action) => {
    
    switch(action.type) {
        case cartTypes.itemAdd:
            console.log({state,action},"itemAdd");

            if(state.items.find(p => p.id === action.payload.id)) {
                return {
                    ...state,
                    items: state.items.map(p => p.id === action.payload.id ? ({
                        ...p,
                        cantidad: p.cantidad + 1  
                      }) : p),
                    cantidad: state.cantidad + 1,
                    total: state.total + action.payload.precio
                };
            }

            return {
                ...state,
                items: state.items.concat({
                    ...action.payload,
                    cantidad: 1                    
                }),
                cantidad: state.cantidad + 1,
                total: state.total + action.payload.precio              
            }
        
        case cartTypes.itemRemove:
            console.log({state,action},"itemRemove");

            return {
                ...state,
                items: state.items.filter(p => p.id !== action.payload.id),
                cantidad: state.cantidad - action.payload.cantidad,
                total: state.total - (action.payload.cantidad * action.payload.precio)
            }

        default:
            return state;    
    }
    
};

export default cartReducer;