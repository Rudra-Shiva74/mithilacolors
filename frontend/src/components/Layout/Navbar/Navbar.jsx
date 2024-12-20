import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../img/logooo.png";
import { useSelector, useDispatch } from 'react-redux'
import { isAdminLogin, isUserLogin } from "../../Auth/Logincheck";
import { incrementproduct } from "../../../redux/addtocart/CounterSlice";
import axios from "axios";
const Navbar = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;
  const count = useSelector((state) => state.counter.value)
  const [cartdata, setCartdata] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const dispatch = useDispatch()
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from local storage
    localStorage.removeItem("admin"); // Remove user data from local storage
    localStorage.removeItem("token"); // Remove user data from local storage
    navigate("/Login"); // Redirect to home page
  };

  useEffect(() => {
    fetchProductsCount();
    isAdminLogin();
    isUserLogin();
  }, [1, 2]);
  const fetchProductsCount = async () => {
    try {
      const resp = await axios.post(`${apiUrl}checktocart`, { email: isUserLogin() && isUserLogin().email }, {
        headers: {
          'Authorization': `${apiKey}`
        }
      });
      let data = 0; // Initialize as a number
      data += resp.data.product.reduce((sum, element) => sum + Number(element.quantity), 0);
      dispatch(incrementproduct(data));
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {/* Mobile Sidebar */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          left: isSidebarOpen ? 0 : "-250px",
          transition: "left 0.3s",
          width: "250px",
          height: "100%",
          backgroundColor: "white",
          boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
          zIndex: 1000,
        }}
      >
        <button onClick={toggleSidebar} style={{ margin: "10px" }}>
          Close
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeSidebar}>
              <i className="fa-solid fa-shop"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/AboutMithila"
              onClick={closeSidebar}
            >
              <i className="fa-solid fa-eject"></i> About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/ProductSearchPage"
              onClick={closeSidebar}
            >
              <i className="fa-brands fa-servicestack"></i> Customization
            </Link>
          </li>
          {isAdminLogin() ? '' :
            <li className="nav-item">
              <Link className="nav-link" to="/user/Addtocard">
                <i className="fa fa-cart-plus" aria-hidden="true"></i> Cards
              </Link>
            </li>}
          {/* Conditional rendering based on user state */}
          {isAdminLogin() || isUserLogin() ? (
            <>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user"></i> {(isAdminLogin() && isAdminLogin().name) || (isUserLogin() && isUserLogin().name)}
                  {/* Display the user's name */}
                </Link>
                {isAdminLogin() ?
                  <ul className="dropdown-menu" aria-labelledby="userDropdown">
                    <li>
                      <Link className="dropdown-item" to="/Admin/UserList">
                        <i className="fas fa-users"></i> Users List
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Admin/ProductOrder">
                        <i className="fas fa-box"></i> Products list
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Profile">
                        <i className="fa-solid fa-id-card"></i> Profile Updates
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/Admin/ClothingForm">
                        <i className="fas fa-upload"></i>
                        Upload Product
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item  btn-danger"
                        onClick={() => {
                          closeSidebar();
                          handleLogout();
                        }}
                      >
                        <i className="fa-solid fa-right-from-bracket"></i> Logout
                      </button>
                    </li>
                  </ul> :
                  <ul className="dropdown-menu" aria-labelledby="userDropdown">
                    <li>
                      <Link className="dropdown-item" to="/user/Profile">
                        <i className="fa-solid fa-user"></i> Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        <i className="fa-solid fa-right-from-bracket"></i> Logout
                      </button>
                    </li>
                  </ul>}
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Login" onClick={closeSidebar}>
                  <i className="fa-solid fa-user-plus"></i> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SignUp" onClick={closeSidebar}>
                  <i className="fa-solid fa-right-to-bracket"></i> SignUp
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Desktop Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              className="img-fluid"
              alt="Logo"
              style={{ height: "60px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
            aria-expanded={isSidebarOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="fa-solid fa-shop"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutMithila">
                  <i className="fa-solid fa-eject"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProductSearchPage">
                  <i className="fa-brands fa-servicestack"></i> Customization
                </Link>
              </li>
              {isAdminLogin() ? '' :
                <li className="nav-item">
                  <Link className="nav-link" to="/user/Addtocard">
                    <span className="item-count">{count}</span>
                    <i className="fa fa-cart-plus" aria-hidden="true"></i> Cards
                  </Link>
                </li>}
              {/* Conditional rendering based on user state */}
              {isAdminLogin() || isUserLogin() ? (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i> {(isAdminLogin() && isAdminLogin().name) || (isUserLogin() && isUserLogin().name)}
                  </Link>
                  {isAdminLogin() ?
                    <ul className="dropdown-menu" aria-labelledby="userDropdown">
                      <li>
                        <Link className="dropdown-item" to="/Admin/UserList">
                          <i className="fas fa-users"></i> Users List
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Admin/ProductOrder">
                          <i className="fas fa-box"></i> Products list
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Profile">
                          <i className="fa-solid fa-id-card"></i> Profile Updates
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/Admin/ClothingForm">
                          <i className="fas fa-upload"></i>
                          Upload Product
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                          <i className="fa-solid fa-right-from-bracket"></i>{" "}
                          Logout
                        </button>
                      </li>
                    </ul> :
                    <ul className="dropdown-menu" aria-labelledby="userDropdown">
                      <li>
                        <Link className="dropdown-item" to="/user/Profile">
                          <i className="fa-solid fa-user"></i> Profile
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                          <i className="fa-solid fa-right-from-bracket"></i> Logout
                        </button>
                      </li>
                    </ul>}
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">
                      <i className="fa-solid fa-user-plus"></i> Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/SignUp">
                      <i className="fa-solid fa-right-to-bracket"></i> SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
