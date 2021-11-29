import cartTypes from '../types/cartTypes';

export const setItemAdd = (producto) => {
    return {
        type: cartTypes.itemAdd,
        payload: producto
    }
};

export const setItemRemove = (producto) => {
    return {
        type: cartTypes.itemRemove,
        payload: producto
    }
};