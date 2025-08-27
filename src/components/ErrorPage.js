import React from "react";
import { Link } from "react-router-dom"; 
import "../style/ErrorPage.css"; 

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Oops! Page Not Found</h2>
        <p className="error-message">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="error-btn">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
