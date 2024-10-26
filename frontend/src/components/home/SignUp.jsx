import React, { useState } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() }); // Trim input
  };

  const validateForm = () => {
    let formErrors = {};

    // Password matching check
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    // Email validation check
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        console.log(formData);
        const response = await axios.post(
          "http://localhost:8000/api/user_register",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response from server:", response.data);
        navigate("/login"); // Navigate to the login page after successful signup
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>𝕊𝕚𝕘𝕟 𝕌𝕡</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
