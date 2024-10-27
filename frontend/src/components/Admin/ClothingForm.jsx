import React, { useEffect, useState } from "react";
import styles from "./ClothingForm.module.css"; // Ensure you're importing the correct file
import { isAdminLogin } from "../Auth/Logincheck";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ClothingForm = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [theme, setTheme] = useState('');
  const [clothing_type, setClothing_type] = useState('');
  const [image, setImage] = useState([]);
  const [fabric, setFabric] = useState('');
  const [fabric_color, setFabric_color] = useState('');
  const [theme_color, setTheme_color] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!clothing_type || !fabric) {
      setFlag(true);
      return;
    }

    const formDataObj = new FormData();

    // Add text fields
    formDataObj.append("theme", theme);
    formDataObj.append("clothing_type", clothing_type);
    formDataObj.append("fabric", fabric);
    formDataObj.append("fabric_color", fabric_color);
    formDataObj.append("theme_color", theme_color);
    formDataObj.append("image", []);

    Array.from(image).forEach((file) => {
      console.log('first')
      formDataObj.append("files", file);  // "images" is the key expected on the backend
    });
    console.log(formDataObj);
    // const product = { clothing_type: e.target.clothing_type.value, theme: e.target.theme.value, fabric: e.target.fabric.value, fabric_color: e.target.fabric_color.value, theme_color: e.target.theme_color.value, admin_id: admin_id }
    const response = await axios.post("http://localhost:8000/api/add_product", formDataObj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    if (response.status === 200) {
      toast.success(`${response.data}`, {
        position: "top-center",
        autoClose: 504,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate('/ProductSearchPage');
      }, 500);
    }
    else{
      
    }
  };

  useEffect(() => {
    if (!isAdminLogin()) {
      navigate('/');
    }
  }, [])

  return (
    <form className={styles.clothingForm} onSubmit={handleSubmit}>
      <h2 className="ram">Select Clothing Preferences</h2>

      <div className={styles.formGroup}>
        <label htmlFor="theme">Theme:</label>
        <select
          name="theme"
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="">Select Theme</option>
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>{flag && !theme ? <div className='text-start text-light'>
          Please Select Theme
        </div> : ''}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="clothing_type">Clothing Type:</label>
        <select
          name="clothing_type"
          id="clothing_type"
          value={clothing_type}
          onChange={(e) => setClothing_type(e.target.value)}
        >
          <option value="">Select Clothing Type</option>
          {clothingTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {flag && !clothing_type ? <div className='text-start text-light'>
          Please Select Clothing Type
        </div> : ''}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="fabric">Fabric:</label>
        <select
          name="fabric"
          id="fabric"
          value={fabric}
          onChange={(e) => setFabric(e.target.value)}
        >
          <option value="">Select Fabric</option>
          {fabrics.map((fabric) => (
            <option key={fabric} value={fabric}>
              {fabric}
            </option>
          ))}
        </select>
        {flag && !fabric ? <div className='text-start text-light'>
          Please Select Fabric
        </div> : ''}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="fabric_color">Fabric Color:</label>
        <select
          name="fabric_color"
          id="fabric_color"
          value={fabric_color}
          onChange={(e) => setFabric_color(e.target.value)}
        >
          <option value="">Select Fabric Color</option>
          {fabricColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        {flag && !fabric ? <div className='text-start text-light'>
          Please Select Fabric Color
        </div> : ''}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="theme_color">Theme Color:</label>
        <select
          name="theme_color"
          id="theme_color"
          value={theme_color}
          onChange={(e) => setTheme_color(e.target.value)}
        >
          <option value="">Select Theme Color</option>
          {themeColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        {flag && !theme_color ? <div className='text-start text-light'>
          Please Select Theme color
        </div> : ''}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="image">
          <i className="fas fa-upload"></i> Upload Image:
        </label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*" multiple
          onChange={(e) => setImage(e.target.files)}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
      <ToastContainer />
    </form>
  );
};

export default ClothingForm;
