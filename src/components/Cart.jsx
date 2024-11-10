import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../store/features/cartSlice';
import { Link } from 'react-router-dom';
// import './Cart.css';
import Button from './Button';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {items.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.imageUrl} alt={item.name} />
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                    </div>
                </div>
            ))}
            <h3>Total: {totalAmount}</h3>
            <Button onClick={handleClearCart}>Clear Cart</Button>
            <Link to="/checkout">
                <Button className="checkout-button">Proceed to Checkout</Button>
            </Link>
        </div>
    );
}

export default Cart;
