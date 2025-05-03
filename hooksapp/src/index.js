import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Make sure App.js exists in the same directory

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Option 1: Remove the reportWebVitals line entirely
// Option 2: Import reportWebVitals and keep the call
// import reportWebVitals from './reportWebVitals';
