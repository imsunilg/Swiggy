import { useRouteError } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom"; 
import "../style/Error.css"; 

const Error = () => {

  const error = useRouteError();
  console.error(error);
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found</h2>
        <p className="error-description">{error.data } <br/>
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/" className="error-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
