import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';

const ThemeToggle = () => {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {isLightTheme ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;