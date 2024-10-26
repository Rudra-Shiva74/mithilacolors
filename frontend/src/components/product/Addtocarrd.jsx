import React, { useState, useEffect } from "react";
import styles from "../Admin/UserList.module.css"; // Import the CSS module
import axios from "axios";
import { isUserLogin } from "../Auth/Logincheck";

const Addtocart = () => {
  // State to store the list of cart
  const [cart, setCart] = useState([]);

  // Fetch cart when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Mocking user data with name, mobile number, and email
  const fetchUsers = async () => {
    const resp = await axios.get(`http://localhost:8000/api/addtocard`);
    setCart(resp.data);
    console.log(resp.data);
  };

  const removeProduct = async (pid) => {
    const caart = { pid, email: isUserLogin().email }
    console.log(caart)
    const resp = await axios.post(`http://localhost:8000/api/removetocard`, 
      {caart}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchUsers();
  }



  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Product</h2>
      {cart.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Clothing Type</th>
              <th className={styles.th}>Theme</th>
              <th className={styles.th}>Fabric</th>
              <th className={styles.th}>Fabric Color</th>
              <th className={styles.th}>Theme Color</th>
              <th className={styles.th}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((user) => (
              <tr key={user.id} className={styles.row}>
                <td className={styles.td}>{user.clothing_type}</td>
                <td className={styles.td}>{user.theme}</td>
                <td className={styles.td}>{user.fabric}</td>
                <td className={styles.td}>{user.fabric_color}</td>
                <td className={styles.td}>{user.theme_color}</td>
                <td className={styles.td}>
                  <i className={`fa fa-trash ${styles.deleteButton}`} aria-hidden="true" onClick={() => removeProduct(user._id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.loading}>Loading cart...</p>
      )}
    </div>
  );
};

export default Addtocart;