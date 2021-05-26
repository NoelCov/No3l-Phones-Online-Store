import React from "react";

import "./logos-container.styles.scss";

import LogoContainer from "../logo-container/logo-container.component";

import logos from "./logos-data";

export const LogosContainer = () => {
  return (
    <div className="logos-container">
      {logos.map((logo, index) => (
        <LogoContainer key={index} imageUrl={logo.image} brand={logo.brand} />
      ))}
    </div>
  );
};
