import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAuth } from '../context/AuthContext';
import './AuthModal.css';

Modal.setAppElement('#root');

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        onClose();
        setEmail('');
        setPassword('');
        setError('');
      } else {
        setError('Invalid email or password');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      className="auth-modal"
      overlayClassName="auth-overlay"
      closeTimeoutMS={200}
    >
      <div className="auth-modal-content">
        <button className="auth-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="auth-header">
          <h2>Welcome Back!</h2>
          <p>Login to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="auth-error">{error}</div>}
          
          <div className="auth-form-group">
            <label htmlFor="login-email">Email Address</label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <i className="fas fa-envelope auth-input-icon"></i>
          </div>

          <div className="auth-form-group">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <i className="fas fa-lock auth-input-icon"></i>
          </div>

          <div className="auth-options">
            <label className="auth-checkbox">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="auth-link">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Logging in...
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt"></i>
                Login
              </>
            )}
          </button>

          <div className="auth-switch">
            <p>Don't have an account? 
              <button 
                type="button" 
                className="auth-link-btn"
                onClick={() => {
                  onClose();
                  onSwitchToSignup();
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;


