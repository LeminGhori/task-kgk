import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, addToCart } from "../redux/actions"
import { Button } from 'react-bootstrap';
import CloseIcon from '@mui/icons-material/Close';
import './index.scss'; // Import your CSS file for styling

function CartPopup({ toggleCartPopup }) {
    const cartItems = useSelector(state => state.cartReducer.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleDecreaseQuantity = (item) => {
        if ((item.quantity - 1) > 0) {
            dispatch(decreaseQuantity(item.id));
        } else {
            dispatch(removeFromCart(item.id));
        }
    };

    return (
        <div className="cart-popup">
            <div className="cart-popup-header">
                <h3>Cart Items</h3>
                <Button variant="light" onClick={toggleCartPopup}><CloseIcon /></Button>
            </div>
            <div className="cart-popup-body">
                {cartItems?.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems?.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <span>{item.title}</span>
                                    <span>Quantity: {item.quantity}</span>
                                </div>
                                <div className="cart-item-actions">
                                    <Button variant="outline-secondary" size="sm" onClick={() => handleDecreaseQuantity(item)}>-</Button>
                                    <Button variant="outline-secondary" size="sm" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                                    <Button variant="outline-secondary" size="sm" onClick={() => dispatch(addToCart(item))}>+</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CartPopup;
