import React from 'react';

const DailyPick = () => {
  const flower = {
    name: 'Cherry Blossom',
    image: 'https://seed2plant.in/cdn/shop/files/Cherry-Blossoms-seed2plant-1.jpg',
    meaning: 'A symbol of renewal and the fleeting nature of life.',
    story:
      'Cherry blossoms bloom beautifully but briefly, reminding us to appreciate every moment. In Japanese culture, they reflect the beauty of beginnings and the acceptance of life’s transitions.',
  };

  return (
    <section className="mt-80 py-12 px-6 bg-pink-50 rounded-xl shadow-sm max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-4 ">
        🌼 Flower of the Day
      </h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        Discover the beauty and meaning behind today’s featured flowers everyday.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Flower Image */}
        <img
          src={flower.image}
          alt={flower.name}
          className="w-full md:w-1/2 h-72 object-cover rounded-xl shadow-md"
        />

        {/* Flower Description */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-pink-700">{flower.name}</h3>
          <p className="text-gray-700 text-lg italic mt-2">{flower.meaning}</p>
          <p className="text-gray-600 text-base mt-4">{flower.story}</p>

          <div className="text-sm text-gray-400 mt-6">
            Visit us tomorrow for another daily bloom!
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyPick;
