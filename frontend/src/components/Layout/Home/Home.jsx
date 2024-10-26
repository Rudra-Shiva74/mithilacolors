import React, { useEffect, useState } from "react";
import Slider from "./Slider"; // Capitalize 'Slider'
import Cards from "./Cards";
import { Link, useNavigate } from "react-router-dom";
import { isAdminLogin, isUserLogin } from "../../Auth/Logincheck";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    isAdminLogin();
    isUserLogin();
  }, []);
  return (
    <div>
      <Slider /> {/* Capitalize 'Slider' */}
      <Cards />

    </div>
  );
};

export default Home;
