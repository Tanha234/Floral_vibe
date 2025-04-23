import { Link } from 'react-router-dom';
import React from 'react';
import Swal from 'sweetalert2';

function FlowerCard({ flower, onDelete }) {
  const { _id, name, price, season, fragrance, description, stock, image } = flower;

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e3342f',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/flower/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'The flower has been deleted.', 'success');
              onDelete(_id); // 🧼 Remove from UI
            }
          });
      }
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-pink-300 flex flex-col-3 md:flex-row">
      <img
        className="w-full md:w-1/3 object-cover"
        src={image || "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"}
        alt="Flower"
      />
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-3xl font-bold text-pink-700 mb-2">{name}</h2>
          <h6 className="font-bold text-pink-700 mb-2">Price: {price}</h6>
          <h6 className="font-bold text-pink-700 mb-2">Season: {season}</h6>
          <h6 className="font-bold text-pink-700 mb-2">Fragrance: {fragrance}</h6>
          <h6 className="font-bold text-pink-700 mb-2">Stock: {stock}</h6>
          <p className="text-pink-800 text-sm">{description}</p>
        </div>
        <div className="mt-5 flex gap-4">
          {/* View Button */}
          <Link to={`flowerDetails/${_id}`}>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>View</span>
            </button>
          </Link>

          {/* Edit Button */}
          <Link to={`updateFlower/${_id}`}>
            <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                <path d="M3 21h18" />
              </svg>
            </button>
          </Link>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(_id)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlowerCard;
