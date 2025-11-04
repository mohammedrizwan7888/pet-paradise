import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import Cart from './Cart';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPetsDropdownOpen, setIsPetsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { favorites } = useFavorites();
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-paw"></i>
            <span>Pet Paradise</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            
            <div className="dropdown" onMouseEnter={() => setIsPetsDropdownOpen(true)} onMouseLeave={() => setIsPetsDropdownOpen(false)}>
              <Link to="/pets" className="nav-link dropdown-btn" onClick={() => setIsMenuOpen(false)}>
                Pets <i className="fas fa-chevron-down"></i>
              </Link>
              <div className={`dropdown-content ${isPetsDropdownOpen ? 'show' : ''}`}>
                <Link to="/pets" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>All Pets</Link>
                <Link to="/pets/dogs" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Dogs</Link>
                <Link to="/pets/cats" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Cats</Link>
                <Link to="/pets/small-pets" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Small Pets</Link>
              </div>
            </div>
            
            <Link to="/breeds" className="nav-link" onClick={() => setIsMenuOpen(false)}>Breeds</Link>
            <Link to="/pet-services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pet Services</Link>
            <Link to="/my-favorites" className="nav-link favorites-link" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-heart"></i> Favorites
              {favorites.length > 0 && (
                <span className="favorites-count">{favorites.length}</span>
              )}
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>

          <div className="header-actions">
            {isAuthenticated ? (
              <div 
                className="user-menu"
                onMouseEnter={() => setIsUserMenuOpen(true)}
                onMouseLeave={() => setIsUserMenuOpen(false)}
              >
                <button className="user-btn">
                  <i className="fas fa-user-circle"></i>
                  <span className="user-name">{user?.name}</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className={`user-dropdown ${isUserMenuOpen ? 'show' : ''}`}>
                  <Link to="/my-orders" className="user-dropdown-link">
                    <i className="fas fa-shopping-bag"></i>
                    My Orders
                  </Link>
                  <Link to="/my-favorites" className="user-dropdown-link">
                    <i className="fas fa-heart"></i>
                    My Favorites
                  </Link>
                  <div className="user-dropdown-divider"></div>
                  <button className="user-dropdown-link logout-btn" onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="auth-buttons">
                <button 
                  className="btn btn-outline"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Login
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => setIsSignupModalOpen(true)}
                >
                  Sign Up
                </button>
              </div>
            )}
            <button 
              className="btn btn-primary cart-btn" 
              onClick={() => setIsCartOpen(true)}
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-text">Cart</span>
              {getTotalItems() > 0 && (
                <span className="cart-count">{getTotalItems()}</span>
              )}
            </button>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={() => setIsSignupModalOpen(true)}
      />
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={() => setIsLoginModalOpen(true)}
      />
    </header>
  );
};

export default Header;
