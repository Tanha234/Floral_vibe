import React, { useState } from 'react';

const BlogSection = () => {
  const [expandedBlog, setExpandedBlog] = useState(null); // State to manage expanded blog

  const blogs = [
    {
      id: 1,
      title: 'How to Keep Your Flowers Fresh Longer 🌿',
      excerpt: 'Learn the best tips to make your bouquet last and brighten your home for days!',
      content: 'Here’s how you can take care of your flowers and make them last longer. Add fresh water every two days, cut the stems, and keep your flowers in a cool place.',
      image: 'https://www.hhfshop.com/cdn/shop/articles/IMG_1139.jpg?v=1628792729'
    },
    {
      id: 2,
      title: 'The Language of Flowers 🌷',
      excerpt: 'Did you know that flowers have meanings? Learn what your bouquet says about your emotions!',
      content: 'Every flower has its own language. Roses symbolize love, while lilies signify purity. Discover the hidden messages behind your favorite flowers.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Whe7q_tZ5eUf89v3UhjsRIZEQSmGVO5RUA&s'
    },
    {
      id: 3,
      title: 'Perfect Flower Arrangements for Every Occasion 🌸',
      excerpt: 'Want to impress at your next event? Here are tips for the best flower arrangements for any occasion.',
      content: 'Whether it’s a wedding, a birthday, or a special dinner, the right flower arrangement can make a huge impact. Learn how to choose the perfect flowers for your event.',
      image: 'https://cdn.shopify.com/s/files/1/0038/4253/9590/files/2_43ebf873-4902-450a-9afe-c60073c23277.png?v=1688806481'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id); // Toggle expanded blog
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 mt-20">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">🌼 Bloom Tips & Stories</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">{blog.title}</h3>
              <p className="text-gray-700 text-sm">{expandedBlog === blog.id ? blog.content : blog.excerpt}</p>
              <button 
                className="mt-4 text-pink-500 font-medium hover:underline" 
                onClick={() => toggleExpand(blog.id)}
              >
                {expandedBlog === blog.id ? 'Read Less ←' : 'Read More →'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
