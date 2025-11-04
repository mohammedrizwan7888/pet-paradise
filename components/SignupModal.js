import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAuth } from '../context/AuthContext';
import './AuthModal.css';

Modal.setAppElement('#root');

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const success = signup(name, email, password);
      if (success) {
        onClose();
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
      } else {
        setError('Signup failed. Please try again.');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Signup Modal"
      className="auth-modal"
      overlayClassName="auth-overlay"
      closeTimeoutMS={200}
    >
      <div className="auth-modal-content">
        <button className="auth-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Sign up to start shopping for your perfect pet</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="auth-error">{error}</div>}
          
          <div className="auth-form-group">
            <label htmlFor="signup-name">Full Name</label>
            <input
              type="text"
              id="signup-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
            <i className="fas fa-user auth-input-icon"></i>
          </div>

          <div className="auth-form-group">
            <label htmlFor="signup-email">Email Address</label>
            <input
              type="email"
              id="signup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <i className="fas fa-envelope auth-input-icon"></i>
          </div>

          <div className="auth-form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password (min 6 characters)"
              required
            />
            <i className="fas fa-lock auth-input-icon"></i>
          </div>

          <div className="auth-form-group">
            <label htmlFor="signup-confirm-password">Confirm Password</label>
            <input
              type="password"
              id="signup-confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
            <i className="fas fa-lock auth-input-icon"></i>
          </div>

          <div className="auth-options">
            <label className="auth-checkbox">
              <input type="checkbox" required />
              <span>I agree to the Terms and Conditions</span>
            </label>
          </div>

          <button 
            type="submit" 
            className="auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Creating Account...
              </>
            ) : (
              <>
                <i className="fas fa-user-plus"></i>
                Sign Up
              </>
            )}
          </button>

          <div className="auth-switch">
            <p>Already have an account? 
              <button 
                type="button" 
                className="auth-link-btn"
                onClick={() => {
                  onClose();
                  onSwitchToLogin();
                }}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SignupModal;


