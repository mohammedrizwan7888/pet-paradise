import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on mount (from localStorage)
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    // UI only - no actual backend validation
    // In a real app, this would make an API call
    const userData = {
      id: Date.now(),
      email: email,
      name: email.split('@')[0], // Simple name extraction from email
      loginTime: new Date().toISOString()
    };
    
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    return true; // Simulate successful login
  };

  const signup = (name, email, password) => {
    // UI only - no actual backend validation
    const userData = {
      id: Date.now(),
      name: name,
      email: email,
      loginTime: new Date().toISOString()
    };
    
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    return true; // Simulate successful signup
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('orders');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


