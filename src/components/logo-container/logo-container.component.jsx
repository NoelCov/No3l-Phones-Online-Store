import React from "react";
import { generatePath, withRouter } from "react-router";

import "./logo-container.styles.scss";

const LogoContainer = ({ imageUrl, brand, history }) => {

  const handleClick = () => {
    // Generate the url for the user
    const url = generatePath("/:brand", {
      brand: brand,
    });
    history.push(`${url}`);
  };

  return (
    <div className="logo-container" onClick={handleClick}>
      <img className="logo-img" src={imageUrl} alt="company logo" />
    </div>
  );
};

export default withRouter(LogoContainer);
