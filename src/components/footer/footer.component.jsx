import React from "react";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/about">
        <span className="footer-link">Customer Service</span>
      </Link>
      <Link to="/about">
        <span className="footer-link">FAQ</span>
      </Link>
      <Link to="/about">
        <span className="footer-link">About us</span>
      </Link>
    </div>
  );
};
