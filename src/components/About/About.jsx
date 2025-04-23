import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './About.css'; 
import expert from '../../images/7fadff778ed7233011ff9c9289c7c0fa-removebg-preview.png';

const experts = [
  {
    name: 'Ariana Bloom',
    intro: 'Senior florist with a love for roses and timeless arrangements.',
    favoriteFlower: 'Favorite flower: Rose - classic beauty and elegance!',
    image: 'https://media.istockphoto.com/id/1919265357/photo/close-up-portrait-of-confident-businessman-standing-in-office.jpg?s=612x612&w=0&k=20&c=ZXRPTG9VMfYM3XDo1UL9DEpfO8iuGVSsyh8dptfKQsQ='
  },
  {
    name: 'Liam Petal',
    intro: 'Creative eye behind our bold and modern bouquet designs.',
    favoriteFlower: 'Favorite flower: Sunflower - always looking towards the light!',
    image: 'https://media.istockphoto.com/id/90309221/photo/portrait-of-a-man.jpg?s=612x612&w=0&k=20&c=tl1WvarzX_U84mhru2N5ACv67Z59LUhfIe2c_qnZcyw='
  },
  {
    name: 'Sophie Garland',
    intro: 'Passionate about wildflowers and rustic event décor.',
    favoriteFlower: 'Favorite flower: Wild Orchid - a symbol of rarity and beauty.',
    image: 'https://thumbs.dreamstime.com/b/stop-wasting-my-time-attractive-caucasian-bearded-male-ordinary-clothes-making-bothered-face-being-indifferent-listening-111186291.jpg'
  },
  {
    name: 'Noah Blossom',
    intro: 'Bouquet stylist known for harmony, balance, and color.',
    favoriteFlower: 'Favorite flower: Lily - perfect balance of elegance and freshness.',
    image: 'https://thumbs.dreamstime.com/b/happy-young-man-white-shirt-isolated-portrait-31287114.jpg'
  }
];

const testimonials = [
  {
    name: 'Jane Doe',
    message: 'Floral Vibe made my wedding day even more magical! The bouquets were breathtaking.'
  },
  {
    name: 'John Smith',
    message: 'I got a bouquet for my wife’s birthday, and she loved it! Such beautiful flowers.'
  }
];

const About = () => {
  return (
    <div className="px-4">
      {/* Section 1: How We Started */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20 max-w-6xl mx-auto my-24 px-5">
        <img
          src='https://i.pinimg.com/474x/1b/7d/7c/1b7d7cd3f41a0dfda67cc09a5ef76406.jpg'
          className="md:w-96 h-96 mx-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform"
        />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold text-pink-700 mb-6">How We Started 🌷</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            It all began with a tiny roadside flower stall and a big dream. Our founder, inspired by nature’s beauty and the simple joy a single bloom can bring, started arranging flowers as a way to spread happiness in the community. What began as a humble gesture quickly blossomed into a beloved local favorite. Through dedication, creativity, and a deep love for floristry, Floral Vibe has grown into a full-fledged floral boutique—known not only for our stunning, handcrafted bouquets but also for the heartfelt service that comes with every petal. Each arrangement tells a story, and we’re honored to be part of life’s most cherished moments—from birthdays and weddings to “just because” surprises. At Floral Vibe, we believe flowers have the power to connect, comfort, and celebrate, and that’s the heart behind everything we do.
          </p>
        </div>
      </div>

      {/* Section 2: What We Do */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20 max-w-6xl mx-auto my-36 px-5">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold text-pink-700 mb-6">What We Do 💐</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Floral Vibe, we handpick the freshest flowers and craft them into stunning arrangements for every occasion— from birthdays to weddings, or just to say “I'm thinking of you.” We also offer flower tips, care guides, and a heartfelt community that celebrates the beauty of blooms every day.
          </p>
        </div>
        <img
          src="https://i.pinimg.com/474x/d1/ca/6e/d1ca6e7c40f63128b7c197e59dfda039.jpg"
          alt="What We Do"
          className="md:w-96 h-96 mx-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform"
        />
      </div>

      {/* Section 3: Our Experts */}
      <section className="py-20 bg-pink-50">
        <h2 className="text-4xl font-semibold text-center text-pink-700 mb-12">
          🌸 Meet Our Floral Experts
        </h2>
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            modules={[Pagination]}
            className="custom-swiper"
          >
            {experts.map((expert, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all transform hover:scale-105">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-pink-500"
                  />
                  <h3 className="text-xl font-semibold text-pink-600">{expert.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{expert.intro}</p>
                  <p className="text-gray-500 text-xs italic mt-2">{expert.favoriteFlower}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

   

      
    </div>
  );
};

export default About;
