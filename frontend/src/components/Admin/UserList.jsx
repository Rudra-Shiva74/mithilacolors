import React, { useState, useEffect } from "react";
import styles from "./UserList.module.css"; // Import the CSS module
import axios from "axios";

const UserList = () => {
  // State to store the list of users
  const [users, setUsers] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;
  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Mocking user data with name, mobile number, and email
  const fetchUsers = async () => {
    const resp = await axios.get(`${apiUrl}user_list`, {
      headers: {
        'Authorization': `${apiKey}`
      }
    });
    setUsers(resp.data);
  };

  // Edit user handler
  const handleEdit = (userId) => {
    console.log(`Editing user with ID: ${userId}`);
    // Logic to edit the user
  };

  // Delete user handler
  const handleDelete = async (userId) => {
    if (window.confirm("Do you want to proceed?")) {
      const resp = await axios.delete(`${apiUrl}user/${userId}`, {
        headers: {
          'Authorization': `${apiKey}`
        }
      })
      fetchUsers();
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>User List</h2>
      {users.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Mobile Number</th>
              <th className={styles.th}>Email</th>
              <th className={styles.th}>Password</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className={styles.row}>
                <td className={styles.td}>{user.name}</td>
                <td className={styles.td}>{user.mobile}</td>
                <td className={styles.td}>{user.email}</td>
                <td className={styles.td}>{user.password}</td>
                <td className={styles.td}>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEdit(user._id)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.loading}>Loading users...</p>
      )}
    </div>
  );
};

export default UserList;