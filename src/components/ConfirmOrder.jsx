import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ConfirmOrder = () => {
  const { state } = useLocation();
  const { product } = state || {};
  const navigate = useNavigate();

  // State for form inputs
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to ensure fields are not empty
    if (!fullName || !address || !phone) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields!",
      });
      return;
    }

    // SweetAlert confirmation for successful order
    Swal.fire({
      icon: "success",
      title: "Order Confirmed!",
      text: `Thank you for your purchase, ${fullName}!`,
      confirmButtonText: "Okay",
    }).then(() => {
      // Redirect to the shop page after confirming
      navigate("/shop");
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-pink-600 text-center">Order Confirmation</h2>

      {product ? (
        <>
          <div className="mb-4 text-center mx-auto ">
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded mb-2 mx-auto"
            />
            <p className="text-pink-700">
              <strong>Name:</strong> {product.name}
            </p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Fragrance:</strong> {product.fragrance}</p>
            <p><strong>Season:</strong> {product.season}</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded"
            />
            <textarea
              placeholder="Delivery Instructions"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 rounded"
              rows="3"
            />
            <button
              type="submit"
              className="bg-pink-600 text-white py-2 rounded mt-4"
            >
              Confirm Order
            </button>
          </form>
        </>
      ) : (
        <p>No product found for confirmation.</p>
      )}
    </div>
  );
};

export default ConfirmOrder;
