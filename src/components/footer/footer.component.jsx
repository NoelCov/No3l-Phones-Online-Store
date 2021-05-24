import React from "react";

import "./footer.styles.scss";

export const Footer = () => {
  return (
    <div className="footer">
      {/* OPEN LINKS */}
      <span
        onClick={() => console.log("About us page")}
        className="footer-link"
      >
        Customer Service
      </span>
      <span className="footer-link">FAQ</span>
      <span className="footer-link">About us</span>
    </div>
  );
};
