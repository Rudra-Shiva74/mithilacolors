import React from "react";
import "./Footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About Us Column */}
          <div className="col-md-3">
            <h5>About Us</h5>
            <ul>
              <li>
                <a href="#vision">Our Vision</a>
              </li>
              <li>
                <a href="#sanrakshak">Sanrakshak</a>
              </li>
              <li>
                <a href="#marg-darshak">Marg Darshak</a>
              </li>
              <li>
                <a href="#karyakarini">Karyakarini</a>
              </li>
              <li>
                <a href="#members">Members</a>
              </li>
            </ul>
          </div>

          {/* About Mithila Column */}
          <div className="col-md-3">
            <h5>About Mithila</h5>
            <ul>
              <li>
                <a href="#history">History Of Mithila</a>
              </li>
              <li>
                <a href="#present">Mithila At Present</a>
              </li>
              <li>
                <a href="#painting">Mithila Painting</a>
              </li>
              <li>
                <a href="#vibhuti">Mithilak Vibhuti</a>
              </li>
              <li>
                <a href="#sahitya">Maithili Sahitya</a>
              </li>
            </ul>
          </div>

          {/* Facilitation Column */}
          <div className="col-md-3">
            <h5>Facilitation</h5>
            <ul>
              <li>
                <a href="#ghatkaiti">Ghatkaiti</a>
              </li>
              <li>
                <a href="#arogya">Arogya Paramarsh</a>
              </li>
              <li>
                <a href="#jyotish">Jyotish Seva</a>
              </li>
              <li>
                <a href="#legal">Legal Help</a>
              </li>
              <li>
                <a href="#career">Career Guidance</a>
              </li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="col-md-3">
            <h5>Our Services</h5>
            <ul>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#estore">E-Store</a>
              </li>
              <li>
                <a href="#event">Event</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p>Copyright 2024 © Maithil Manch, All Rights Reserved.</p>
          <p>Website Designed and Developed by S.K.Mishra & Abhishek Tiwari</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
