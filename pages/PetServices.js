import React from 'react';
import './PetServices.css';

const PetServices = () => {
  const services = [
    {
      title: "Pet Grooming",
      description: "Professional grooming services for all types of pets",
      icon: "fas fa-cut",
      features: ["Bath & Brush", "Nail Trimming", "Ear Cleaning", "Styling"]
    },
    {
      title: "Pet Training",
      description: "Expert training programs for dogs and cats",
      icon: "fas fa-graduation-cap",
      features: ["Basic Obedience", "Behavioral Training", "Puppy Classes", "Advanced Training"]
    },
    {
      title: "Pet Boarding",
      description: "Safe and comfortable boarding for your pets",
      icon: "fas fa-home",
      features: ["24/7 Care", "Daily Exercise", "Feeding", "Medical Attention"]
    },
    {
      title: "Pet Health Check",
      description: "Comprehensive health examinations and vaccinations",
      icon: "fas fa-stethoscope",
      features: ["Health Exams", "Vaccinations", "Dental Care", "Emergency Care"]
    },
    {
      title: "Pet Transportation",
      description: "Safe transportation services for your pets",
      icon: "fas fa-car",
      features: ["Airport Pickup", "Vet Visits", "Emergency Transport", "Long Distance"]
    },
    {
      title: "Pet Photography",
      description: "Professional photography sessions for your beloved pets",
      icon: "fas fa-camera",
      features: ["Portrait Sessions", "Action Shots", "Family Photos", "Digital Albums"]
    }
  ];

  return (
    <div className="pet-services-page">
      <div className="container">
        <div className="services-hero">
          <h1>Pet Services</h1>
          <p>Comprehensive care and services for your beloved pets</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>Ready to Book a Service?</h2>
          <p>Contact us today to schedule an appointment for your pet</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Book Now</button>
            <button className="btn btn-secondary">Call Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetServices;
