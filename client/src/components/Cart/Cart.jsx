import React, { useState } from 'react';
import '../Cart/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 39.99, quantity: 2 },
    { id: 3, name: 'Product 3', price: 19.99, quantity: 1 },
  ]);
  const [customerName, setCustomerName] = useState('');
  const [customerCountry, setCustomerCountry] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handlePurchase = (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm("Are you sure you want to complete the purchase?");

    if (isConfirmed) {
      // Logic for handling purchase (e.g., sending data to server) goes here
      console.log("Purchased by", customerName, customerCountry, customerAddress);
      alert("Purchase Successful!"); // Use alert to show a success message
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </div>
              <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      </div>
      <div className="purchase-form">
        <h2>Complete Your Purchase</h2>
        <form onSubmit={handlePurchase}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={customerCountry}
            onChange={(e) => setCustomerCountry(e.target.value)}
            placeholder="Enter your country"
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            placeholder="Enter your address"
            required
          />

          <button className="purchase-button" type="submit">Purchase</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
