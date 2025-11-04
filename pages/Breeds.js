import React, { useState } from 'react';
import './Breeds.css';

const Breeds = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const breeds = [
    // Dogs
    { name: "Golden Retriever", category: "dog", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300", description: "Friendly, intelligent, and devoted family dogs" },
    { name: "German Shepherd", category: "dog", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300", description: "Loyal, confident, and versatile working dogs" },
    { name: "Labrador Retriever", category: "dog", image: "https://images.unsplash.com/photo-1547407139-3c921a71905c?w=300", description: "Outgoing, active, and friendly companions" },
    { name: "French Bulldog", category: "dog", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300", description: "Adaptable, playful, and smart small dogs" },
    
    // Cats
    { name: "Persian", category: "cat", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300", description: "Gentle, quiet, and sweet-natured long-haired cats" },
    { name: "Maine Coon", category: "cat", image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=300", description: "Gentle giants with friendly and playful personalities" },
    { name: "British Shorthair", category: "cat", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300", description: "Calm, easygoing, and affectionate companions" },
    { name: "Siamese", category: "cat", image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=300", description: "Intelligent, vocal, and social cats" },
    
    // Small Pets
    { name: "Holland Lop Rabbit", category: "small", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300", description: "Gentle, friendly, and easy to handle rabbits" },
    { name: "Guinea Pig", category: "small", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300", description: "Social, gentle, and perfect for families" },
    { name: "Hamster", category: "small", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300", description: "Active, curious, and low-maintenance pets" },
    { name: "Chinchilla", category: "small", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300", description: "Soft, gentle, and long-lived small pets" }
  ];

  const filteredBreeds = selectedCategory === 'all' 
    ? breeds 
    : breeds.filter(breed => breed.category === selectedCategory);

  return (
    <div className="breeds-page">
      <div className="container">
        <div className="breeds-hero">
          <h1>Pet Breeds</h1>
          <p>Discover the perfect breed for your family</p>
        </div>

        <div className="breeds-filter">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Breeds
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'dog' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('dog')}
          >
            Dogs
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'cat' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('cat')}
          >
            Cats
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'small' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('small')}
          >
            Small Pets
          </button>
        </div>

        <div className="breeds-grid">
          {filteredBreeds.map((breed, index) => (
            <div key={index} className="breed-card">
              <div className="breed-image">
                <img src={breed.image} alt={breed.name} />
                <div className="breed-category">
                  <span className={`category-badge ${breed.category}`}>
                    {breed.category === 'dog' ? 'Dog' : breed.category === 'cat' ? 'Cat' : 'Small Pet'}
                  </span>
                </div>
              </div>
              <div className="breed-content">
                <h3>{breed.name}</h3>
                <p>{breed.description}</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breeds;






