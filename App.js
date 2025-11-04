import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pets from './pages/Pets';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import SmallPets from './pages/SmallPets';
import Breeds from './pages/Breeds';
import PetServices from './pages/PetServices';
import PetDetail from './pages/PetDetail';
import MyOrders from './pages/MyOrders';
import MyFavorites from './pages/MyFavorites';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <CartProvider>
          <Router>
            <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="/pets/dogs" element={<Dogs />} />
                <Route path="/pets/cats" element={<Cats />} />
                <Route path="/pets/small-pets" element={<SmallPets />} />
                <Route path="/pets/:id" element={<PetDetail />} />
                <Route path="/breeds" element={<Breeds />} />
                <Route path="/pet-services" element={<PetServices />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/my-favorites" element={<MyFavorites />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
