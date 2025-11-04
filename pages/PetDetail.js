import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { pets } from '../data/pets';
import { useCart } from '../context/CartContext';
import './PetDetail.css';

const PetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const foundPet = pets.find(p => p.id === parseInt(id));
    if (foundPet) {
      // Ensure pet has all required fields with defaults
      const petWithDefaults = {
        ...foundPet,
        images: foundPet.images || [foundPet.image],
        longDescription: foundPet.longDescription || foundPet.description,
        vaccinationDetails: foundPet.vaccinationDetails || {
          primary: "Completed",
          booster: "Up to date",
          deworming: "Current"
        },
        sellerInfo: foundPet.sellerInfo || {
          name: "Pet Paradise",
          phone: "(555) 123-PETS",
          email: "info@petparadise.com",
          location: "San Francisco, CA",
          rating: 4.8,
          verified: true
        },
        healthInfo: foundPet.healthInfo || {
          weight: "Standard",
          gender: "Unknown",
          color: "Various",
          healthGuarantee: true
        }
      };
      setPet(petWithDefaults);
    }
  }, [id]);

  if (!pet) {
    return (
      <div className="pet-detail-loading">
        <div className="container">
          <p>Loading pet details...</p>
        </div>
      </div>
    );
  }

  const handleAdopt = () => {
    addToCart(pet);
    alert(`${pet.name} has been added to your cart!`);
    navigate('/');
  };

  const handleMessageSeller = () => {
    const message = `Hello, I'm interested in ${pet.name}. Could you please provide more information?`;
    window.open(`mailto:${pet.sellerInfo.email}?subject=Inquiry about ${pet.name}&body=${encodeURIComponent(message)}`);
  };

  return (
    <div className="pet-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> Back
        </button>

        <div className="pet-detail-content">
          {/* Image Gallery */}
          <div className="pet-images-section">
            <div className="main-image">
              <img 
                src={pet.images[selectedImageIndex]} 
                alt={pet.name}
              />
            </div>
            {pet.images.length > 1 && (
              <div className="thumbnail-gallery">
                {pet.images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img src={img} alt={`${pet.name} ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pet Information */}
          <div className="pet-info-section">
            <div className="pet-header">
              <h1>{pet.name}</h1>
              <div className="pet-price">${pet.price}</div>
            </div>

            <div className="pet-meta">
              <span className="meta-item">
                <i className="fas fa-dog"></i> {pet.breed}
              </span>
              <span className="meta-item">
                <i className="fas fa-birthday-cake"></i> {pet.age}
              </span>
              <span className="meta-item">
                <i className="fas fa-tag"></i> {pet.category.charAt(0).toUpperCase() + pet.category.slice(1)}
              </span>
            </div>

            <div className="pet-description">
              <h2>Description</h2>
              <p>{pet.longDescription}</p>
            </div>

            {/* Health Information */}
            <div className="pet-health-info">
              <h2>Health Information</h2>
              <div className="health-grid">
                <div className="health-item">
                  <strong>Weight:</strong> {pet.healthInfo.weight}
                </div>
                <div className="health-item">
                  <strong>Gender:</strong> {pet.healthInfo.gender}
                </div>
                <div className="health-item">
                  <strong>Color:</strong> {pet.healthInfo.color}
                </div>
                {pet.healthInfo.healthGuarantee && (
                  <div className="health-item guarantee">
                    <i className="fas fa-shield-alt"></i> Health Guarantee Included
                  </div>
                )}
              </div>
            </div>

            {/* Vaccination Details */}
            <div className="vaccination-details">
              <h2>Vaccination Details</h2>
              <div className="vaccination-list">
                {Object.entries(pet.vaccinationDetails).map(([key, value]) => (
                  <div key={key} className="vaccination-item">
                    <span className="vacc-label">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                    </span>
                    <span className="vacc-status">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="pet-features">
              <h2>Features & Benefits</h2>
              <div className="features-list">
                {pet.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Seller Information */}
            <div className="seller-info">
              <h2>Seller Information</h2>
              <div className="seller-card">
                <div className="seller-header">
                  <div>
                    <h3>{pet.sellerInfo.name}</h3>
                    {pet.sellerInfo.verified && (
                      <span className="verified-badge">
                        <i className="fas fa-check-circle"></i> Verified Seller
                      </span>
                    )}
                  </div>
                  <div className="seller-rating">
                    <i className="fas fa-star"></i> {pet.sellerInfo.rating}
                  </div>
                </div>
                <div className="seller-details">
                  <p>
                    <i className="fas fa-map-marker-alt"></i> {pet.sellerInfo.location}
                  </p>
                  <p>
                    <i className="fas fa-phone"></i> {pet.sellerInfo.phone}
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i> {pet.sellerInfo.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="btn btn-primary btn-large" onClick={handleAdopt}>
                <i className="fas fa-heart"></i> Adopt Now
              </button>
              <button className="btn btn-secondary btn-large" onClick={handleMessageSeller}>
                <i className="fas fa-envelope"></i> Message Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;

