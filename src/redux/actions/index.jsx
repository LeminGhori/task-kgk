// actions.js

export const CATEGORY = 'CATEGORY'
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const category = (payload) => {
    return {
        type: CATEGORY,
        payload: payload
    }
}
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId,
});

export const decreaseQuantity = (itemId) => ({
    type: DECREASE_QUANTITY,
    payload: itemId,
});
