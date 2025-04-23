import React, { useState } from "react";
import "./Services.css"; // Import your custom CSS
import TeamIntroduction from "./TeamIntroduction";

// Service Packages Section
const servicePackages = [
  {
    title: "Basic Package",
    price: "$30",
    description: "Simple bouquet design, 1-2 flower types, Standard wrapping",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvQJr4oumGJvHhyHdVSicUNqqwWWuPbBIYg&s",
  },
  {
    title: "Premium Package",
    price: "$60",
    description: "Custom design, Multiple flower types, Premium wrapping & vase",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCuf8Qp2i6-9fSidm6Nt5zCAupWeG-tTL7A&s",
  },
  {
    title: "Event Package",
    price: "$500",
    description: "Floral setups for weddings & events, Customized designs, On-site florists",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI5Juml7iydntW1SKF2rHSdwA85QkfE8DxA&s",
  },
];

// Floral Services Section
const services = [
  {
    title: "Custom Bouquets",
    description: "Design personalized flower arrangements for any occasion.",
    icon: "💐",
  },
  {
    title: "Event Floral Design",
    description: "Professional floral setups for weddings, parties, and corporate events.",
    icon: "🎉",
  },
  {
    title: "Flower Subscriptions",
    description: "Weekly or monthly fresh flower deliveries to your doorstep.",
    icon: "📦",
  },
  {
    title: "Same-Day Delivery",
    description: "Fast delivery service available for last-minute flower needs.",
    icon: "🚚",
  },
];

// FAQ Section with Accordion
const faqs = [
  {
    question: "How do I place an order?",
    answer: "You can place an order directly on our website or call us to discuss your needs.",
  },
  {
    question: "Can I customize my bouquet?",
    answer: "Yes, we offer full customization options for bouquets according to your preferences.",
  },
  {
    question: "Do you offer international delivery?",
    answer: "Currently, we only offer delivery within the local region. International delivery is not available.",
  },
];

// Team Introduction Section
const teamMembers = [
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "Alice is a passionate florist with over 10 years of experience in creating beautiful bouquets and floral designs. She specializes in custom arrangements for weddings and events.",
    expertise: "Wedding & Event Florals",
  },
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "John has a keen eye for detail and has been in the floral industry for 5 years. His expertise is in creating sophisticated floral designs for corporate events and special occasions.",
    expertise: "Corporate & Special Occasions",
  },
  {
    name: "Sophia Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Sophia is a creative florist who loves to work with a variety of flowers. With a background in both floral design and photography, she brings a unique perspective to her arrangements.",
    expertise: "Photography & Custom Bouquets",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <div className="services-container">
      {/* Service Packages Section */}
      <h2 className="section-heading text-pink-700">Our Floral Service Packages</h2>
      <div className="service-packages-grid">
        {servicePackages.map((pkg, index) => (
          <div key={index} className="package-card">
            <div className="package-image-wrapper">
              <img src={pkg.image} alt={pkg.title} className="package-image" />
            </div>
            <h3 className="package-title">{pkg.title}</h3>
            <p className="package-price">{pkg.price}</p>
            <p className="package-description">{pkg.description}</p>
            <button className="cta-button" onClick={() => handleBookNow(pkg)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Floral Services Section */}
      <h2 className="section-heading mt-40 text-pink-700 mb-16">Our Floral Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <TeamIntroduction />

      {/* FAQ Section */}
      <h2 className="section-heading text-pink-700 mt-36">Frequently Asked Questions</h2>
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <div className="faq-question" onClick={() => handleAccordionToggle(index)}>
              <h3>{faq.question}</h3>
              <span className="accordion-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <h2 className="section-heading text-pink-700 mt-36">Customer Reviews</h2>
      <div className="reviews-section">
        <div className="review-card">
          <h3>Jane Doe</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Amazing service! The bouquet was perfect for my wedding.</p>
        </div>
        <div className="review-card">
          <h3>John Smith</h3>
          <p>⭐⭐⭐⭐</p>
          <p>Great flowers, fast delivery, but the packaging could be improved.</p>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-pink-700 mb-4">Book {selectedPackage?.title}</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
              <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
              <input type="date" className="w-full border p-2 rounded" />
              <textarea placeholder="Message or Preferences" className="w-full border p-2 rounded" />
              <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
