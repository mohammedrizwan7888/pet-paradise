import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Perfect
            <span className="hero-highlight"> Furry Friend</span>
          </h1>
          <p className="hero-description">
            Discover adorable pets from trusted breeders. From playful puppies to cuddly kittens, 
            we have the perfect companion waiting for you.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-large">
              <i className="fas fa-search"></i>
              Browse Pets
            </button>
            <button className="btn btn-secondary btn-large">
              <i className="fas fa-info-circle"></i>
              Learn More
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Families</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Pet Breeds</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Health Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
