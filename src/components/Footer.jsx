import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>
              <i className="fas fa-dumbbell me-2"></i>FitPlanner Pro
            </h5>
            <p>Your journey to fitness starts here. Stay healthy, stay strong!</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Follow Us</h5>
            <a href="#" className="text-white me-3">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <p>
            &copy; 2026 FitPlanner Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
