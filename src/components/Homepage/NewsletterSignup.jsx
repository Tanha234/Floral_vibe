import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="bg-pink-100 py-16 px-4 mt-20 rounded-xl shadow-inner">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-2">🌸 Get 10% Off Your First Order!</h2>
        <p className="text-gray-700 mb-6">
          Sign up to receive flower care tips, special deals, and the latest seasonal picks.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
