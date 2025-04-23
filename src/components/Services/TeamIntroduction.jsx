import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamIntroduction = () => {
  const teamMembers = [
    {
      name: 'Alice Johnson',
      bio: 'Alice is a passionate florist with over 10 years of experience in creating beautiful bouquets and floral designs.',
      expertise: 'Wedding & Event Florals',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'John Doe',
      bio: 'John has a keen eye for detail and has been in the floral industry for 5 years. His expertise is in creating sophisticated floral designs.',
      expertise: 'Corporate & Special Occasions',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Sophia Smith',
      bio: 'Sophia is a creative florist who loves to work with a variety of flowers. With a background in both floral design and photography.',
      expertise: 'Photography & Custom Bouquets',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Michael Brown',
      bio: 'Michael specializes in floral designs for large events and corporate functions, creating arrangements that stand out.',
      expertise: 'Corporate & Event Styling',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Olivia Green',
      bio: 'Olivia has a natural talent for selecting the perfect flowers to create stunning arrangements for any occasion.',
      expertise: 'Wedding & Custom Bouquets',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      name: 'Daniel White',
      bio: 'Daniel focuses on creating minimalistic yet impactful floral designs, focusing on clean lines and balance.',
      expertise: 'Modern & Minimalist Florals',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Change this to 3 to display 3 members per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-20 px-4 mt-20">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-4">🌸 Meet Our Floral Experts</h2>
      <p className="text-center text-gray-600 mb-12">Our talented florists behind every beautiful arrangement 🌷</p>

      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-pink-200 shadow"
                />
                <h3 className="text-gray-700 font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-gray-600 italic mb-4">{member.bio}</p>
                <p className="text-pink-600 font-semibold mb-2">{member.expertise}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamIntroduction;
