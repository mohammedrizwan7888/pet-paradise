import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About Pet Paradise</h1>
          <p>Your trusted partner in finding the perfect companion</p>
        </div>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Pet Paradise was founded with a simple mission: to connect loving families 
              with their perfect furry, feathered, or scaly companions. We believe that 
              every pet deserves a loving home, and every family deserves the joy that 
              comes with pet ownership.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Commitment</h2>
            <p>
              We are committed to the health and well-being of all our animals. Each pet 
              in our care receives proper veterinary attention, nutrition, and socialization 
              to ensure they're ready for their new homes.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature">
                <i className="fas fa-heart"></i>
                <h3>Loving Care</h3>
                <p>Every pet receives individual attention and care</p>
              </div>
              <div className="feature">
                <i className="fas fa-shield-alt"></i>
                <h3>Health Guarantee</h3>
                <p>All pets come with health certificates and guarantees</p>
              </div>
              <div className="feature">
                <i className="fas fa-users"></i>
                <h3>Expert Support</h3>
                <p>Our team provides ongoing support and advice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



