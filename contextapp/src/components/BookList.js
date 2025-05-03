import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    const books = ["the way of kings", "the way of life", "the final empire"];

    return (
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul style={{ background: theme.ui }}>
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
