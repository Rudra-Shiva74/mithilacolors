import React from "react";
import "./Cards.css"; // Custom CSS for additional styling

const Cards = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">𝕄𝕚𝕥𝕙𝕚𝕝𝕒 ℂ𝕣𝕖𝕒𝕥𝕚𝕠𝕟𝕤</h2>
      {/* Title for all cards */}
      <div className="row g-4">
        {/* First Card with Mithila Art */}
        <div className="col-lg-4 col-md-6">
          <div className="card h-100">
            <img
              src="https://i0.wp.com/dignum.co.in/wp-content/uploads/2023/02/DIG2453-1-1.jpeg?fit=1080%2C1080&ssl=1" // Mithila painting image link
              className="card-img-top custom-height"
              alt="Mithila Art 1"
            />
            <div className="card-body">
              <h5 className="card-title">Mithila Paint Cloths:</h5>
              <p className="card-text">
                Mithila saris are elegant, handcrafted garments featuring
                vibrant, intricate designs that symbolize the rich cultural
                heritage of Mithila.
              </p>
            </div>
            <div className="card-footer">
              <a href="/Product" className="btn btn-primary">
                customization
              </a>
            </div>
          </div>
        </div>

        {/* Second Card with Mithila Art */}
        <div className="col-lg-4 col-md-6">
          <div className="card h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuQzItiODXbeI0YFiLBvpVAncqx_p1Tw-5RKrKPNPiv45MpY9OTqN0I_QYWf2Tc3dCoQ&usqp=CAU" // Another Mithila painting image link
              className="card-img-top custom-height"
              alt="Mithila Art 2"
            />
            <div className="card-body">
              <h5 className="card-title">Mithila Painting</h5>
              <p className="card-text">
                Mithila painting is a traditional art form from Bihar, India,
                characterized by vibrant colors, intricate patterns, and themes
                inspired by mythology and nature.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                customization
              </a>
            </div>
          </div>
        </div>

        {/* Third Card with Mithila Art */}
        <div className="col-lg-4 col-md-6">
          <div className="card h-100">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/2/RM/UJ/ZV/3297603/-5d-6999-fullres.jpg" // Mithila folk art image link
              className="card-img-top custom-height"
              alt="Mithila Art 3"
            />
            <div className="card-body">
              <h5 className="card-title">Mithila Decorative.</h5>
              <p className="card-text">
                Mithila painting is a vibrant art form featuring intricate
                designs that adorn various products, enhancing their aesthetic
                appeal and cultural significance.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                customization
              </a>
            </div>
          </div>
        </div>

        {/* Fourth Card with Mithila Art (New Card) */}
        <div className="col-lg-4 col-md-6">
          <div className="card h-100">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/2/RM/UJ/ZV/3297603/-5d-6999-fullres.jpg" // Mithila folk art image link
              className="card-img-top custom-height"
              alt="Mithila Art 4"
            />
            <div className="card-body">
              <h5 className="card-title">Mithila Art 4</h5>
              <p className="card-text">
                Experience the beauty of Mithila art through this captivating
                piece.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                customization
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card h-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuQzItiODXbeI0YFiLBvpVAncqx_p1Tw-5RKrKPNPiv45MpY9OTqN0I_QYWf2Tc3dCoQ&usqp=CAU" // Another Mithila painting image link
              className="card-img-top custom-height"
              alt="Mithila Art 2"
            />
            <div className="card-body">
              <h5 className="card-title">Mithila Painting</h5>
              <p className="card-text">
                Mithila painting is a traditional art form from Bihar, India,
                characterized by vibrant colors, intricate patterns, and themes
                inspired by mythology and nature.
              </p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                customization
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
