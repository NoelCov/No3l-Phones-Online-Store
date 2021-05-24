import React from "react";

import "./logos-container.styles.scss";

import logos from "./logos-data";

import { LogoContainer } from "../logo-container/logo-container.component";

export const LogosContainer = () => {
  return (
    <div className="logos-container">
      {logos.map((logo, index) => (
        <LogoContainer key={index} imageUrl={logo} />
      ))}
    </div>
  );
};
