import React, { useEffect, useState } from 'react';
import FlowerCard from '../FlowerCard/FlowerCard';
import flower from '../../images/SoftestCharm_2-removebg-preview.png';
import ShopByOccasions from './ShopByOccasions';

import FeaturedProducts from './FeaturedProducts';
import DailyPick from './DailyPicks';
import Testimonials from './Testimonials';
import NewsletterSignup from './NewsletterSignup';
import SeasonalBanner from './Seasonal Banner';
import BlogPreview from './Blog';


function Homepage() {
  const [flowers, setFlowers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/flower')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setFlowers(data))
      .catch(err => setError(err.message));
  }, []);

  const handleDeleteFromUI = (id) => {
    setFlowers(prev => prev.filter(flower => flower._id !== id));
  };

  return (
    <div>
    
    <div className="bg-white rounded-3xl mb-10 overflow-hidden px-16">
  <div className="grid md:grid-cols-2 items-center h-full gap-2">

    {/* Text Section */}
    <div className="ps-40 md:px-12 lg:pl-20 py-10 flex flex-col justify-center md:items-start text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
        Moments Made Special with Flowers & Light
      </h1>
      <p className="text-gray-500 mb-6 text-lg">
        Brighten someone's day with the timeless charm of fresh blooms and soft candlelight.  
        Whether it's a birthday, anniversary, or just because — our thoughtfully curated gifts bring joy to every heart.  
        Experience the magic of elegant simplicity and heartfelt surprises.
      </p>
      <button className="bg-pink-400 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition duration-300 mt-2">
        Shop Now
      </button>
    </div>

    {/* Image Section */}
    <div className="p-6 flex justify-center items-center">
      <img
        src={flower}
        alt="Flowers"
        className="max-w-full h-[350px] object-contain"
      />
    </div>
  </div>
</div>


<ShopByOccasions/>
<FeaturedProducts/>
<DailyPick/>

<Testimonials/>
<SeasonalBanner/>
<BlogPreview/>
<NewsletterSignup/>


  



{/* 
      🌼 Flower Cards
      <div className="grid md:grid-cols-3 gap-4">
        {flowers.map(flower => (
          <FlowerCard
            key={flower._id}
            flower={flower}
            onDelete={handleDeleteFromUI}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Homepage;
