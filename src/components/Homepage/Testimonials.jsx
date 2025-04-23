import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Ariana Gomez',
      review: 'Absolutely stunning flowers! Delivered fresh and on time. My mom loved them!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      name: 'Lucas Bennett',
      review: 'Beautiful arrangements and very easy ordering process. Will buy again!',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
      name: 'Sofia Rahman',
      review: 'Great customer service and the bouquet was even better than expected!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'Nadia Sheikh',
      review: 'Fast delivery, fresh flowers and a smile on my face! 10/10 experience.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/52.jpg'
    }
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={`text-yellow-400 ${i < count ? '' : 'opacity-30'}`} />
    ));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="bg-pink-50 py-20 px-4 mt-20">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-4">💬 What Our Customers Say</h2>
      <p className="text-center text-gray-600 mb-12">Real experiences from real flower lovers 🌷</p>

      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col items-center text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-pink-200 shadow"
                />
                <p className="text-gray-700 italic mb-4">"{review.review}"</p>
                <div className="flex items-center justify-center gap-1 mb-2">{renderStars(review.rating)}</div>
                <p className="text-pink-600 font-semibold">{review.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
