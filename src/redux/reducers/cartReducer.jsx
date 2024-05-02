// reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY } from '../actions';

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                // Item already exists in cart, increase its quantity
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex].quantity += 1;
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                // Item doesn't exist in cart, add it with quantity 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;
