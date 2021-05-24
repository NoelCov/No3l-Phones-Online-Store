import React from "react";

import "./logo-container.styles.scss";

export const LogoContainer = ({ imageUrl }) => {
  return (
    <div className="logo-container">
      <img className="logo-img" src={imageUrl} alt="company logo" />
    </div>
  );
};
