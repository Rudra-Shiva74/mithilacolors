import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { isAdminLogin } from "../Auth/Logincheck";

const AdminLogin = () => {
  const [email, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const naigate = useNavigate();

  const validateForm = () => {
    const formErrors = {};
    if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email address";
    }
    if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    return formErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        // Make API request to login the user
        const response = await axios.post(
          "http://localhost:8000/api/admin_login", // Correct endpoint
          {
            email, // Send email directly
            password, // Send password directly
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Extract response data
        const data = response.data;
        console.log(data)
        // // If the response is successful (status 200)
        if (response.status === 200) {
          // Store user token in localStorage
          localStorage.setItem("token", data.token || ""); // Handle token if sent

          // Optionally store user details if needed
          localStorage.setItem("admin", JSON.stringify(data.res)); // Assuming the response contains user info

          // Redirect to the homepage
          naigate('/');
        } else {
          setErrors({ ...errors, api: data.message }); // Set API error message
        }
      } catch (error) {
        // Handle errors from the API
        setErrors({
          ...errors,
          api:
            error.response?.data?.message || "Login failed, please try again.",
        });
        console.error("Error:", error);
      }
    } else {
      // Set form validation errors
      setErrors(formErrors);
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password Clicked");
    // Logic for forgot password can be added here
  };

  useEffect(() => {
    if (isAdminLogin()) naigate('/');
  })

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setusername(e.target.value)}
              required
              autoComplete="email"
            />
            {errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <div className="forgot-password">
              <button
                type="button"
                className="forgot-password-btn"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {errors.api && <span className="error">{errors.api}</span>}{" "}
          {/* Show API error */}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
