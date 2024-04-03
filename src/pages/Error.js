import React from 'react';
import './Error.css'; // Import CSS file for additional styling
import ErrorImage from '../components/Assets/Error.png'; // Import the Error image

export default function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-image-container">
        <img src={ErrorImage} alt="Error" className="error-image" />
      </div>
      <div className="error-text-container">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! Looks like your cup is empty.</p>
        <p className="error-paragraph">Head back home to fill it up with a fresh pour of caffeinated joy!</p>
      </div>
    </div>
  );
}
