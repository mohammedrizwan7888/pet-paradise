import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './MyOrders.css';

const MyOrders = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      return;
    }

    // Load orders from localStorage
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, [isAuthenticated, navigate]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return '#27ae60';
      case 'shipped':
        return '#3498db';
      case 'processing':
        return '#f39c12';
      case 'cancelled':
        return '#e74c3c';
      default:
        return '#7f8c8d';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="my-orders-page">
      <div className="container">
        <div className="orders-header">
          <h1>My Orders</h1>
          <p>Track and manage your pet orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <i className="fas fa-shopping-bag"></i>
            <h2>No Orders Yet</h2>
            <p>You haven't placed any orders yet. Start shopping to see your orders here!</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/pets')}
            >
              Browse Pets
            </button>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>Order #{order.id}</h3>
                    <p className="order-date">Placed on {formatDate(order.date)}</p>
                  </div>
                  <div className="order-status">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <img src={item.image} alt={item.name} className="order-item-image" />
                      <div className="order-item-details">
                        <h4>{item.name}</h4>
                        <p className="order-item-breed">{item.breed}</p>
                        <p className="order-item-quantity">Quantity: {item.quantity}</p>
                      </div>
                      <div className="order-item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <div className="order-total">
                    <strong>Total: ${order.total.toFixed(2)}</strong>
                  </div>
                  <div className="order-actions">
                    <button className="btn btn-secondary">View Details</button>
                    {order.status !== 'delivered' && order.status !== 'cancelled' && (
                      <button className="btn btn-danger">Cancel Order</button>
                    )}
                    {order.status === 'delivered' && (
                      <button className="btn btn-primary">Reorder</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;


