import React, { useEffect, useState } from 'react';
import orderService from '../appwrite/orders';
import { useSelector } from 'react-redux';
// import './OrderHistory.css';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const { userData } = useSelector(state => state.auth);

    useEffect(() => {
        const fetchOrders = async () => {
            const orderData = await orderService.getOrders(userData.$id);
            setOrders(orderData);
        };
        fetchOrders();
    }, [userData]);

    return (
        <div className="order-history">
            <h2>Order History</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>Order ID: {order.id}, Total: {order.totalAmount}</li>
                ))}
            </ul>
        </div>
    );
}

export default OrderHistory;
