import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.css"; // Import the CSS module
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { isAdminLogin, isUserLogin } from '../Auth/Logincheck.js'
const ProductPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const [imageOptions, setImageOptions] = useState([]);
  const [currentimg, setCurrentimg] = useState();
  const [product, setProduct] = useState();
  const [checkcart, setCheckcart] = useState([]);
  const [cart, setCart] = useState({
    pid: param.id,
    email: (isUserLogin() && isUserLogin().email) ? isUserLogin().email : ''
  })
  const [css, setCss] = useState({
    color: "3px solid #ed08cb",
    index: 0
  });
  // State to keep track of the selected image
  const fetchdata = async () => {
    try {
      const resp = await axios.get(`http://localhost:8000/api/product/${param.id}`);
      setProduct(resp.data);
      setImageOptions(resp.data.image)
      setCurrentimg(`http://localhost:8000/${resp.data.image[0].path}`)
      const resp1 = await axios.post(`http://localhost:8000/api/checktocart`, { cart }, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (resp1.status === 200) {
        setCheckcart(resp1.data.pid);
      }
    } catch (error) {
      navigate('/ProductSearchPage')
    }
  }

  const deleteProduct = async () => {
    try {
      if (window.confirm("Do you want to proceed?")) {
        const resp = await axios.delete(`http://localhost:8000/api/product/${param.id}`);
        navigate('/ProductSearchPage')
      }
    } catch (error) {
      navigate('/ProductSearchPage')
    }
  }
  const addToCart = async () => {
    if (!isUserLogin()) {
      window.alert("Please Login First")
      navigate('/login');
    } else {
      if (checkcart.includes(param.id)) {
        const resp = await axios.post(`http://localhost:8000/api/removetocard`, { cart }, {
          headers: {
            "Content-Type": "application/json",
          },
        })
      } else {
        const resp = await axios.post(`http://localhost:8000/api/addtocard`, { cart }, {
          headers: {
            "Content-Type": "application/json",
          },
        })
      }
    }
    fetchdata();
  }

  useEffect(() => {
    fetchdata();
    isAdminLogin();
    isUserLogin();
  }, []);

  return (
    <div className={styles.productPage}>
      <div className={styles.productContainer}>
        {/* Image Options Section */}
        <div className={styles.productImageOptions}>
          {imageOptions && imageOptions.map((image, index) => (
            <img
              key={index}
              src={`http://localhost:8000/${image.path}`}
              alt={`Thumbnail ${index + 1}`}
              className={styles.thumbnailImage}
              style={{ border: index === css.index ? css.color : '' }}
              onClick={() => {
                setCss({ color: "3px solid #ed08cb", index: index });
                setCurrentimg(`http://localhost:8000/${image.path}`)
              }}
            />
          ))}
        </div>

        {/* Product Image Section */}
        <div className={styles.productImageSection}>
          <img
            src={currentimg}
            alt="Product"
            className={styles.productImage}
          />
        </div>

        {/* Product Details Section */}
        <div className={styles.productDetails}>
          {/* Buttons */}
          <div className={styles.offers}>
            <p>All Details:</p>
            <ul>
              <li>
                <b>Clothing Theme :</b>5% Unlimited Cashback on Flipkart Axis
                Bank Credit Card
              </li>
              <li>
                <b>Fabric :</b>10% off up to ₹1,500 on SBI Credit Card
                Transactions of ₹4,990 and above
              </li>
              <li>
                <b>Fabric_color :</b>10% off up to ₹1,750 on SBI Credit Card EMI
                Transactions of ₹4,990 and above
              </li>
              <li>
                <b>Theme color :</b> Get extra ₹1500 off (inclusive of cashback)
              </li>
            </ul>
          </div>
          <div className={styles.buttonContainer}>
            {isAdminLogin() ? <><button className={`${styles.btn} ${styles.addToCart}`} onClick={deleteProduct}>
              Delete Product
            </button><button className={`${styles.btn} ${styles.buyNow}`}>
                Edit Product
              </button> </> :
              <><button className={`${styles.btn} ${styles.addToCart}`} onClick={addToCart}>
                {checkcart.includes(param.id) ? 'Remove From Card' : 'Add To Card'}
              </button>
                <Link to={`/BuyingForm`} className={`${styles.btn} ${styles.buyNow}`}>Buy Now</Link></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;