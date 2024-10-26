import React from "react";
import first from "../img/first.jpg";
import second from "../img/sec.jpg";
import third from "../img/third.jpg";
import "./Slider.css"; // CSS file ko import karein

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={second} className="d-block w-100 slider-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={third} className="d-block w-100 slider-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={first} className="d-block w-100 slider-img" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
