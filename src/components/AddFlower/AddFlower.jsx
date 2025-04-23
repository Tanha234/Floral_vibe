import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddFlower = () => {
  const [imageBase64, setImageBase64] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageBase64(reader.result); 
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const newFlower = {
      name: form.name.value,
      color: form.color.value,
      category: form.category.value,
      price: form.price.value,
      supplier: form.supplier.value,
      season: form.season.value,
      description: form.description.value,
      fragrance: form.fragrance.value,
      image: imageBase64, // Pass the base64 image data
      stock: form.stock.value,
    };

    fetch('http://localhost:5000/flower', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFlower),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            title: 'Success!',
            text: 'Flower added successfully!',
            icon: 'success',
            confirmButtonColor: '#ec4899',
          });
          form.reset();
          setImageBase64(''); // Clear the image after submitting
        }
      })
      .catch((err) => {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong!',
          icon: 'error',
          confirmButtonColor: '#ec4899',
        });
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-90">
        <h2 className="text-4xl font-semibold text-center text-pink-600 mb-8">Add a New Flower</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Flower Name</label>
              <input type="text" name="name" className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500" placeholder="Enter flower name" />
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Color</label>
              <input type="text" name="color" className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500" placeholder="Enter color" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Category</label>
              <select name="category" className="select select-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500">
                <option value="">Select Category</option>
                <option>Romantic</option>
                <option>Wedding</option>
                <option>Seasonal</option>
                <option>Sympathy</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Price ($)</label>
              <input type="number" name="price" className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500" placeholder="Enter price" />
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Supplier Name</label>
              <input type="text" name="supplier" className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500" placeholder="Enter supplier name" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Stock</label>
              <input type="number" name="stock" className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500" placeholder="Enter stock quantity" />
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Season</label>
              <select name="season" className="select select-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500">
                <option value="">Select Season</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Fragrance</label>
              <select name="fragrance" className="select select-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500">
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
              <label className="label text-lg font-medium text-gray-700">Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="input input-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500" />
            </div>

            <div className="form-control">
              <label className="label text-lg font-medium text-gray-700">Description</label>
              <textarea name="description" className="textarea textarea-bordered w-full py-3 rounded-lg border-gray-300 focus:ring-pink-500" placeholder="Enter a short description" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="form-control">
              <button type="submit" className="bg-pink-500 text-white w-full py-3 font-semibold rounded-lg">
                Add Flower
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFlower;
