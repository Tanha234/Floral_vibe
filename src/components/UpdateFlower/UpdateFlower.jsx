import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function UpdateFlower() {
  const { id } = useParams();  // Get the flower ID from the URL params
  const [flower, setFlower] = useState(null);  // State to hold the flower data
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetch flower data when component mounts or ID changes
  useEffect(() => {
    fetch(`http://localhost:5000/flower/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFlower(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching flower:", err);
        setLoading(false);
      });
  }, [id]);

  // Show loading or error if flower is not found
  if (loading) return <div>Loading...</div>;
  if (!flower) return <div>Flower not found</div>;

  // Handle form submission for updating the flower
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedFlower = {
      name: form.elements.name?.value,
      color: form.elements.color?.value,
      category: form.elements.category?.value,
      price: form.elements.price?.value,
      supplier: form.elements.supplier?.value,
      season: form.elements.season?.value,
      description: form.elements.description?.value,
      fragrance: form.elements.fragrance?.value,
      image: form.elements.image?.value,
      stock: form.elements.stock?.value,
    };

    // Debugging: Check if any field is undefined or empty
    console.log("Updated Flower:", updatedFlower);

    // Validate form fields: if any field is missing, show an error
    const missingFields = Object.keys(updatedFlower).filter(
      (key) => updatedFlower[key] === undefined || updatedFlower[key] === ""
    );

    if (missingFields.length > 0) {
      Swal.fire({
        title: 'Error',
        text: `Some form fields are missing or invalid. Missing fields: ${missingFields.join(', ')}`,
        icon: 'error',
        confirmButtonColor: '#ec4899',
      });
      return;
    }

    // Send PUT request to update the flower
    fetch(`http://localhost:5000/flower/${id}`, {
      method: 'PUT',  // Use PUT for updating the resource
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFlower),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to update the flower');
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Updated!',
            text: 'Flower updated successfully!',
            icon: 'success',
            confirmButtonColor: '#ec4899',
          });
          // Optionally, update local state with the updated data
          setFlower({ ...flower, ...updatedFlower });
        } else {
          Swal.fire({
            title: 'No Changes Made',
            text: 'No changes were detected or the update failed!',
            icon: 'warning',
            confirmButtonColor: '#ec4899',
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: 'Oops!',
          text: err.message || 'Something went wrong during the update!',
          icon: 'error',
          confirmButtonColor: '#ec4899',
        });
        console.error('Update failed:', err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-90">
        <h2 className="text-4xl font-semibold text-center text-pink-600 mb-8">Update Flower</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Flower Name</label>
              <input
                type="text"
                name="name"
                defaultValue={flower.name}
                className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
                placeholder="Enter flower name"
              />
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Color</label>
              <input
                type="text"
                name="color"
                defaultValue={flower.color}
                className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
                placeholder="Enter color"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Category</label>
              <select
                name="category"
                defaultValue={flower.category}
                className="select select-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
              >
                <option value="">Select Category</option>
                <option>Romantic</option>
                <option>Wedding</option>
                <option>Seasonal</option>
                <option>Sympathy</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Price ($)</label>
              <input
                type="number"
                name="price"
                defaultValue={flower.price}
                className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
                placeholder="Enter price"
              />
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Supplier Name</label>
              <input
                type="text"
                name="supplier"
                defaultValue={flower.supplier}
                className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
                placeholder="Enter supplier name"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Stock</label>
              <input
                type="number"
                name="stock"
                defaultValue={flower.stock}
                className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
                placeholder="Enter stock quantity"
              />
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Season</label>
              <select
                name="season"
                defaultValue={flower.season}
                className="select select-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
              >
                <option value="">Select Season</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Fragrance</label>
              <select
                name="fragrance"
                defaultValue={flower.fragrance}
                className="select select-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
              >
                <option value="">Select Fragrance</option>
                <option>Sweet</option>
                <option>Floral</option>
                <option>Spicy</option>
                <option>Fruity</option>
                <option>Citrus</option>
                <option>Earthy</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                name="image"
                defaultValue={flower.image}
                className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
                placeholder="Paste image URL"
              />
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                defaultValue={flower.description}
                className="textarea textarea-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500"
                placeholder="Enter a short description"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="form-control">
              <button
                type="submit"
                className="bg-pink-500 text-white w-full py-3 font-semibold rounded-lg"
              >
                Update Flower
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateFlower;
