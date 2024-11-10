import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/features/cartSlice';
import { addOrder } from '../store/features/orderSlice';
import orderService from '../appwrite/orders';
// import './Checkout.css';
import Button from './Button';
import Input from './Input';

const Checkout = () => {
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch();

    const handlePlaceOrder = async () => {
        const order = {
            address,
            paymentMethod,
            // Add any other relevant details
        };
        const savedOrder = await orderService.createOrder(order);
        dispatch(addOrder(savedOrder));
        dispatch(clearCart());
        // Navigate to order confirmation page
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form>
                <label>
                    Address:
                    <Input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <label>
                    Payment Method:
                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="cashOnDelivery">Cash on Delivery</option>
                    </select>
                </label>
                <Button type="button" onClick={handlePlaceOrder}>Place Order</Button>
            </form>
        </div>
    );
}

export default Checkout;
