import { cartActionTypes } from "./cart.types";

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item,
});

export const getTotal = () => ({
    type: cartActionTypes.GET_TOTAL
});

export const deleteAll = () => ({
    type: cartActionTypes.DELETE_ALL
});

export const deleteItem = (item) => ({
    type: cartActionTypes.DELETE_ITEM,
    payload: item
});

export const decreaseItem = (item) => ({
    type: cartActionTypes.DECREASE_ITEM,
    payload: item
});

