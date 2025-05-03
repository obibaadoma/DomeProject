import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { isLightTheme } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  
  return (
    <nav className={`navbar ${isLightTheme ? 'light' : 'dark'}`}>
      <div className="title-container">
        <h1>Context App</h1>
      </div>
      <div className="nav-buttons">
        <button 
          onClick={toggleAuth} 
          className="auth-btn"
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;