import React, { useState } from "react";
import "./Product.css"; // Import your CSS file

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    category: "Saree",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/RM/UJ/ZV/3297603/-5d-6999-fullres.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 15,
    category: "Suits",
    image:
      "https://i0.wp.com/dignum.co.in/wp-content/uploads/2023/02/DIG2453-1-1.jpeg?fit=1080%2C1080&ssl=1",
  },
  {
    id: 3,
    name: "Product 3",
    price: 20,
    category: "Dupatta",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/RM/UJ/ZV/3297603/-5d-6999-fullres.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 25,
    category: "Menskurta",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuQzItiODXbeI0YFiLBvpVAncqx_p1Tw-5RKrKPNPiv45MpY9OTqN0I_QYWf2Tc3dCoQ&usqp=CAU",
  },
  {
    id: 5,
    name: "Product 5",
    price: 30,
    category: "MensShawal",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/RM/UJ/ZV/3297603/-5d-6999-fullres.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: 35,
    category: "paag",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuQzItiODXbeI0YFiLBvpVAncqx_p1Tw-5RKrKPNPiv45MpY9OTqN0I_QYWf2Tc3dCoQ&usqp=CAU",
  },
  {
    id: 7,
    name: "Product 7",
    price: 40,
    category: "Paag",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/RM/UJ/ZV/3297603/-5d-6999-fullres.jpg",
  },
  {
    id: 8,
    name: "Product 8",
    price: 45,
    category: "Paag",
    image:
      "https://i0.wp.com/dignum.co.in/wp-content/uploads/2023/02/DIG2453-1-1.jpeg?fit=1080%2C1080&ssl=1",
  },
];

const Product = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(100);

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category) {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    } else {
      setFilteredProducts(products);
    }
  };

  // Handle price range filter
  const handlePriceFilter = (e) => {
    const range = e.target.value;
    setPriceRange(range);
    setFilteredProducts(products.filter((product) => product.price <= range));
  };

  return (
    <div className="product-page">
      <div className="filter-section">
        <h3>Filters</h3>
        <h4>Categories</h4>
        <ul>
          <li>
            <button
              className="filter-button"
              onClick={() => handleCategoryFilter("")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className="filter-button"
              onClick={() => handleCategoryFilter("Saree")}
            >
              Saree
            </button>
          </li>
          <li>
            <button
              className="filter-button"
              onClick={() => handleCategoryFilter("Suits")}
            >
              Suits
            </button>
          </li>
          <li>
            <button
              className="filter-button"
              onClick={() => handleCategoryFilter("Dupatta")}
            >
              Dupatta
            </button>
          </li>
          <li>
            <button
              className="filter-button"
              onClick={() => handleCategoryFilter("Menskurta")}
            >
              Mens Kurta
            </button>
          </li>
          <li>
            <button
              className="filter-button"
              onClick={() => handleCategoryFilter("MensShawal")}
            >
              Mens Shawl
            </button>
          </li>
          <li>
            <button
              className="filter-button"
              onClick={() => handleCategoryFilter("Paag")}
            >
             Paag
            </button>
          </li>
        </ul>

        <h4>Price Range</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={handlePriceFilter}
        />
        <p>Price: Up to ${priceRange}</p>
      </div>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Product;
