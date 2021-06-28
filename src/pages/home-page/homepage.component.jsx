import LogoContainer from "../../components/logo-container/logo-container.component";

import React from "react";

import data from "./data";

import "./homepage.styles.scss";

export const HomePage = () => {
  return (
    <div className="homepage-container">
      {data.map((logo, index) => (
        <LogoContainer key={index} imageUrl={logo.image} brand={logo.brand} />
      ))}
    </div>
  );
};
