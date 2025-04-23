import React, { useEffect, useState } from 'react';
import { FaStar, FaCartPlus, FaEye } from 'react-icons/fa';

const FeaturedProducts = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/flower')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? <FaStar key={i} className="text-yellow-500" /> : <FaStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };

  return (
    <section className="px-4 py-10 ">
      <h2 className="text-3xl font-bold text-center mt-16 mb-4 text-indigo-900">🌸 Bestsellers</h2>
<p className="text-center text-gray-600 mb-10">
  Our most loved blooms — perfect for any occasion and guaranteed to brighten your day.
</p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto h-40 ">
        {products.map(product => (
          <div key={product._id} className=" rounded-2xl text-center p-6 shadow-xl hover:scale-105 ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover rounded-xl"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-pink-600 text-lg">${product.price}.00</p>
              <div className="flex items-center gap-1 mt-2 justify-center ">
                {renderStars(product.rating || 0)} {/* Rating */}
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
