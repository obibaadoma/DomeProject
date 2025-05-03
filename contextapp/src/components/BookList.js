import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { AuthContext } from '../contexts/AuthContext';

const BookList = () => {
  const { isLightTheme } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);
  const themeClass = isLightTheme ? 'light' : 'dark';

  return (
    <div className={`book-list ${themeClass}`}>
      <h2>Book List</h2>
      {isAuthenticated ? (
        <ul className={`book-list-items ${themeClass}`}>
          <li>The Way of Kings</li>
          <li>The Name of the Wind</li>
          <li>The Final Empire</li>
        </ul>
      ) : (
        <p className={`login-message ${themeClass}`}>Please log in to view books</p>
      )}
    </div>
  );
};

export default BookList;
