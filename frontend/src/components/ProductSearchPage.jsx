import React, { useState, useMemo, useEffect } from "react";
import styles from "./ProductPage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductSearchPage = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedClothing_type, setSelectedClothing_type] = useState(null);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedFabric_color, setSelectedFabric_color] = useState(null);
  const [selectedTheme_color, setSelectedTheme_color] = useState(null);
  const [products, setProducts] = useState([]);

  // Sample product data with unique IDs

  const fetchproducts = async () => {
    try {
      const resp = await axios.get(`${apiUrl}product`);
      setProducts(resp.data);
    } catch (error) {
      console.log(error)
    }
  }

  // Function to clear all filters
  const clearFilters = () => {
    setSelectedTheme('');
    setSelectedClothing_type('');
    setSelectedFabric('');
    setSelectedFabric_color('');
    setSelectedTheme_color('');
  };

  const filterProduct = products.filter((e) => {
    return (
      (selectedTheme ? e.theme === selectedTheme : true) &&
      (selectedClothing_type ? e.clothing_type === selectedClothing_type : true) &&
      (selectedFabric ? e.fabric === selectedFabric : true) &&
      (selectedFabric_color ? e.fabric_color === selectedFabric_color : true) &&
      (selectedTheme_color ? e.theme_color === selectedTheme_color : true)
    );
  });

  useEffect(() => {
    fetchproducts();
  }, [])
  const themes = [
    "Chhath Puja",
    "Lord Jagannath",
    "Gajanand",
    "Doli Kahaar",
    "Matsya(Fish)",
    "Matsya Sangam",
  ];
  const clothingTypes = [
    "Saree",
    "Suits",
    "Dupatta",
    "MensKurta",
    "Mens Kurta",
    "Mens Shawl",
    "Paag",
  ];
  const fabrics = [
    "Eri Silk",
    "Tussar Silk",
    "Paper Silk",
    "Khadi Cotton",
    "Tc Cotton",
  ];
  const fabricColors = [
    "Black, White, Earthy Brown",
    "Light( Blue, Green, Pink ,Yellow )",
    "White, Begie",
    "Sky, Blue, Light(yellow,Green)",
    "Light(Blue, Green, Pink, Yellow",
  ];
  const themeColors = [
    "Black (Silver,Golden)",
    "White (Black, Golden, maroon, Red, Multi colors)",
    "Earthy Brown (Black, Multicolor)",
    "Beige(Black Multi color)",
    "Light shades(Black, Maroon, Multi color)",
  ];
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
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={selectedClothing_type}
          onChange={(e) => setSelectedClothing_type(e.target.value)}
          aria-label="Select Clothing Type"
        >
          <option value="">Select Clothing Type</option>
          {clothingTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={selectedFabric}
          onChange={(e) => setSelectedFabric(e.target.value)}
          aria-label="Select Fabric"
        >
          <option value="">Select Fabric</option>
          {fabrics.map((fabric) => (
            <option key={fabric} value={fabric}>
              {fabric}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={selectedFabric_color}
          onChange={(e) => setSelectedFabric_color(e.target.value)}
          aria-label="Select Fabric Color"
        >
          <option value="">Fabric Color</option>
          {fabricColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={selectedTheme_color}
          onChange={(e) => setSelectedTheme_color(e.target.value)}
          aria-label="Select Theme Color"
        >
          <option value="">Theme Color</option>
          {themeColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        {/* Clear Filters Button */}
        <button className={styles.clearButton} onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className={styles.productGrid}>
        {filterProduct.length > 0 ? (
          filterProduct.map((product, index) => {
            return (
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
            )
          })
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearchPage;