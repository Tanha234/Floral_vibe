import React, { useEffect, useState } from 'react';

const SeasonalBanner = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-04-30T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-12 px-4 rounded-xl mt-20 shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-2">🌷 Spring Blossoms Sale!</h2>
          <p className="text-lg">Limited-time offer: Only available till April 30! Celebrate the season with fresh blooms.</p>
        </div>
        <div className="flex gap-4 text-center text-lg font-semibold">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white text-pink-600 px-4 py-2 rounded-lg shadow-md">
              <p className="text-2xl">{value || '00'}</p>
              <span className="text-sm">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalBanner;
