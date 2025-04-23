import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-rose-100 to-pink-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side Image with Overlay */}
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <img
            src="https://assets.intleflorist.com/site/0081A/PIM_Images/Regular/STGB0100-1.png"
            alt="Floral Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-rose-300 bg-opacity-40 flex items-center justify-center">
            
          </div>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 p-6 sm:p-10">
          <h3 className="text-2xl font-bold text-pink-500 mb-6">Get in Touch</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-rose-200 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-rose-200 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border border-rose-200 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-rose-600 transition font-semibold"
              >
                Send Message 💌
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
