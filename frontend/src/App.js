import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar.jsx";
import Home from "./components/Layout/Home/Home.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import Login from "./components/home/Login.jsx";
import AdminLogin from "./components/home/AdminLogin.jsx";
import SignUp from "./components/home/SignUp.jsx";
import Product from "./components/product/Product.jsx";
import ClothingForm from "./components/Admin/ClothingForm.jsx";
import AboutMithila from "./components/About/AboutMithila.jsx";
import ProductSearchPage from "./components/ProductSearchPage.jsx";
import ProductPage from "./components/product/ProductPage.jsx";
import UserList from "./components/Admin/UserList.jsx";
import PrivateRoute from "./components/Admin/PrivateRoute.js";
import UserPrivateRoute from "./components/user/UserPrivateRoute.jsx";
import Addtocart from "./components/product/Addtocarrd.jsx";
import BuyingForm from "./components/product/BuyingForm.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AboutMithila" element={<AboutMithila />} />
          <Route path="/ProductSearchPage" element={<ProductSearchPage />} />
          <Route path="/AboutProduct/:id" element={<ProductPage />} />
          <Route path="/BuyingForm" element={<BuyingForm />} />
          <Route  element={<PrivateRoute />}>
            <Route exact path="/Admin/UserList" element={<UserList />} />
            <Route path="/Admin/ClothingForm" element={<ClothingForm />} />
            <Route path="/Admin/ClothingForm" element={<ClothingForm />} />
          </Route>
          <Route  element={<UserPrivateRoute />}>
            <Route exact path="/user/Addtocard" element={<Addtocart />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
