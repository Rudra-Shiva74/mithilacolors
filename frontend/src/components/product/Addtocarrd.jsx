import React, { useState, useEffect } from "react";
import styles from "../Admin/UserList.module.css"; // Import the CSS module
import axios from "axios";
import { Link } from "react-router-dom";
import { isUserLogin } from "../Auth/Logincheck";

const Addtocart = () => {
  // State to store the list of cart
  const [caart, setCaart] = useState([]);

  // Fetch cart when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Mocking user data with name, mobile number, and email
  const fetchUsers = async () => {
    const resp = await axios.get(`http://localhost:8000/api/getcartdetails/${isUserLogin() && isUserLogin().email}`);
    setCaart(resp.data.pid);
  };

  const removeProduct = async (pid) => {
    const cart = { pid: pid, email: isUserLogin().email }
    const resp = await axios.post(`http://localhost:8000/api/removetocard`,
      { cart }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchUsers();
  }



  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Product</h2>
      {caart.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Clothing Type</th>
              <th className={styles.th}>Theme</th>
              <th className={styles.th}>Fabric</th>
              <th className={styles.th}>Fabric Color</th>
              <th className={styles.th}>Theme Color</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {caart.map((user) => (
              <tr key={user.id} className={styles.row}>
                <td className={styles.td}>{user.clothing_type}</td>
                <td className={styles.td}>{user.theme}</td>
                <td className={styles.td}>{user.fabric}</td>
                <td className={styles.td}>{user.fabric_color}</td>
                <td className={styles.td}>{user.theme_color}</td>
                <td className={styles.td}>
                  <i className={`fa fa-trash ${styles.deleteButton}`} aria-hidden="true" onClick={() => removeProduct(user._id)}></i>
                  <Link to={`/AboutProduct/${user._id}`} ><i className={`fa fa-eye ${styles.deleteButton}`} aria-hidden="true"></i></Link>
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