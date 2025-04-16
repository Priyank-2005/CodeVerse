import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">CodeVerse</div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
        <li><Link to="/forum" onClick={toggleMenu}>Forum</Link></li>
        <li><Link to="/quizzes" onClick={toggleMenu}>Quizzes</Link></li>
        <li>
          <Link to="/cart" onClick={toggleMenu}>
            Cart 🛒<span className="cart-count">{cartItems.length}</span>
          </Link>
        </li>
        <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
