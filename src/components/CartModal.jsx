import React from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa"; // Import icons

const CartModal = ({ cart, closeModal, handleBuyNow, handleClose }) => {
  const handleProductBuyNow = (product) => {
    handleBuyNow(product); // Call handleBuyNow function to remove item from cart and navigate to order confirmation
  };

  const handleProductClose = (product) => {
    handleClose(product);  // Call handleClose to remove the item from cart
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-content">
        <button className="close-btn" onClick={closeModal}>✖</button> {/* Close Modal Button */}
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p><strong>Price:</strong> ${item.price}</p>
                  <p><strong>Fragrance:</strong> {item.fragrance}</p>
                  <p><strong>Season:</strong> {item.season}</p>
                </div>
                <div className="cart-actions">
                  <button 
                    className="buy-now-btn" 
                    onClick={() => handleProductBuyNow(item)}>
                    <FaShoppingCart size={20} /> 
                
                  </button>
                  <button 
                    className="close-cart-btn" 
                    onClick={() => handleProductClose(item)}>
                    <FaTimes size={20} /> 
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
