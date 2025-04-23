import React, { useState, useEffect } from "react";
import "./Shop.css";

const Shop = ({ handleAddToCart }) => {
  const [flowers, setFlowers] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    season: [],
    fragrance: [],
  });

  const filterOptions = {
    category: ["Romantic", "Wedding", "Seasonal", "Sympathy"],
    season: ["Spring", "Summer", "Fall", "Winter"],
    fragrance: ["Sweet", "Floral", "Spicy", "Fruity", "Citrus", "Earthy"],
  };

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prev) => {
      const newValues = prev[filterType].includes(value)
        ? prev[filterType].filter((v) => v !== value)
        : [...prev[filterType], value];
      return { ...prev, [filterType]: newValues };
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/flower")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((flower) => {
          const matchCategory =
            filters.category.length === 0 || filters.category.includes(flower.category);
          const matchSeason =
            filters.season.length === 0 || filters.season.includes(flower.season);
          const matchFragrance =
            filters.fragrance.length === 0 || filters.fragrance.includes(flower.fragrance);
          return matchCategory && matchSeason && matchFragrance;
        });
        setFlowers(filtered);
      });
  }, [filters]);

  return (
    <div className="shop-container">
      <aside className="filters">
        {Object.entries(filterOptions).map(([type, options]) => (
          <div key={type} className="filter-group">
            <h3 className="filter-title">{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
            {options.map((option) => (
              <label key={option} className="filter-option">
                <input
                  type="checkbox"
                  value={option}
                  checked={filters[type].includes(option)}
                  onChange={() => handleCheckboxChange(type, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
      </aside>

      <main className="flower-grid">
        {flowers.map((flower) => {
          const { _id, name, price, season, fragrance, description, stock, image } = flower;
          return (
            <div key={_id} className="fancy-card">
              <div className="fancy-image-wrap">
                <img src={image} alt={name} className="fancy-img" />
              </div>
              <div className="fancy-content">
                <h3 className="fancy-title">{name}</h3>
                <p className="fancy-text"><strong>Price:</strong> ${price}</p>
                <p className="fancy-text"><strong>Season:</strong> {season}</p>
                <p className="fancy-text"><strong>Fragrance:</strong> {fragrance}</p>
                <p className="fancy-text"><strong>Stock:</strong> {stock > 0 ? `${stock} available` : 'Out of stock'}</p>
                <p className="fancy-desc">{description}</p>
                <button
                  className="pink-button"
                  onClick={() => handleAddToCart(flower)} // Add to cart directly
                  disabled={stock === 0} // Disable if out of stock
                >
                  🛍️ Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Shop;
