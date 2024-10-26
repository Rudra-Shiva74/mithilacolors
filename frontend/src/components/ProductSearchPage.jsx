import React, { useState, useMemo, useEffect } from "react";
import styles from "./ProductPage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductSearchPage = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedClothing_type, setSelectedClothing_type] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedFabric_color, setSelectedFabric_color] = useState("");
  const [selectedTheme_color, setSelectedTheme_color] = useState("");
  const [products, setProducts] = useState([]);

  // Sample product data with unique IDs
  
  const fetchproducts = async () => {
    const resp = await axios.get(`http://localhost:8000/api/product`);
    setProducts(resp.data);
  }

  useEffect(() => {
    fetchproducts();
  }, [])

  // Function to clear all filters
  const clearFilters = () => {
    setSelectedTheme("");
    setSelectedClothing_type("");
    setSelectedFabric("");
    setSelectedFabric_color("");
    setSelectedTheme_color("");
  };

  // Filtering logic based on selected filters using useMemo for performance
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        (!selectedTheme || product.Theme === selectedTheme) &&
        (!selectedClothing_type ||
          product.Clothing_type === selectedClothing_type) &&
        (!selectedFabric || product.Fabric === selectedFabric) &&
        (!selectedFabric_color ||
          product.Fabric_color === selectedFabric_color) &&
        (!selectedTheme_color || product.Theme_color === selectedTheme_color)
      );
    });
  }, [
    selectedTheme,
    selectedClothing_type,
    selectedFabric,
    selectedFabric_color,
    selectedTheme_color,
  ]);

  // Debugging log

  return (
    <div className={styles.container}>
      <h2>Desinging of mithila</h2>
      {/* Filters */}
      <div className={styles.filters}>
        <select
          className={styles.select}
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
          aria-label="Select Theme"
        >
          <option value="">Theme</option>
          <option value="Chhath Puja">Chhath Puja</option>
          <option value="Lord Jagannath">Lord Jagannath</option>
          <option value="Gajanand">Gajanand</option>
          <option value="Doli Kahaar">Doli Kahaar</option>
          <option value="Matsya(Fish)">Matsya(Fish)</option>
          <option value="Matsya Sangam">Matsya Sangam</option>
        </select>

        <select
          className={styles.select}
          value={selectedClothing_type}
          onChange={(e) => setSelectedClothing_type(e.target.value)}
          aria-label="Select Clothing Type"
        >
          <option value="">Clothing Type</option>
          <option value="Suits">Suits</option>
          <option value="Dupatta">Dupatta</option>
          <option value="MensKurta">Mens Kurta</option>
          <option value="MensShawl">Mens Shawl</option>
          <option value="Paag">Paag</option>
        </select>

        <select
          className={styles.select}
          value={selectedFabric}
          onChange={(e) => setSelectedFabric(e.target.value)}
          aria-label="Select Fabric"
        >
          <option value="">Fabric</option>
          <option value="Eri Silk">Eri Silk</option>
          <option value="Tussar Silk">Tussar Silk</option>
          <option value="Paper Silk">Paper Silk</option>
          <option value="Khadi Cotton">Khadi Cotton</option>
          <option value="Tc Cotton">Tc Cotton</option>
        </select>

        <select
          className={styles.select}
          value={selectedFabric_color}
          onChange={(e) => setSelectedFabric_color(e.target.value)}
          aria-label="Select Fabric Color"
        >
          <option value="">Fabric Color</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Light(Blue, Green, Pink, Yellow)">
            Light(Blue, Green, Pink, Yellow)
          </option>
          <option value="Sky, Blue, Light(yellow, Green)">
            Sky, Blue, Light(yellow, Green)
          </option>
        </select>

        <select
          className={styles.select}
          value={selectedTheme_color}
          onChange={(e) => setSelectedTheme_color(e.target.value)}
          aria-label="Select Theme Color"
        >
          <option value="">Theme Color</option>
          <option value="Black (Silver, Golden)">Black (Silver, Golden)</option>
          <option value="White (Black, Golden, Maroon, Red, Multi colors)">
            White (Black, Golden, Maroon, Red, Multi colors)
          </option>
          <option value="Earthy Brown (Black, Multicolor)">
            Earthy Brown (Black, Multicolor)
          </option>
          <option value="Beige (Black Multi color)">
            Beige (Black Multi color)
          </option>
          <option value="Light shades(Black, Maroon, Multi color)">
            Light shades(Black, Maroon, Multi color)
          </option>
        </select>

        {/* Clear Filters Button */}
        <button className={styles.clearButton} onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className={styles.productGrid}>
        {products.length > 0 ? (
          products.map((product, index) => (
              <Link
                to={`/AboutProduct/${product._id}`}
                key={product._id}
                className={styles.productCard}
              >
                <img
                  src={`http://localhost:8000/${product.image[0].path}`}
                  alt={product.name}
                  className={styles.productImage}
                />
                <h4 className={styles.productName}>{product.clothing_type}</h4>
                <p className={styles.productTheme}>{product.theme}</p>
                <p className={styles.productFabric}>{product.fabric}</p>
                <p className={styles.productClothingType}>
                  {product.theme_color}
                </p>
              </Link>
              
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearchPage;