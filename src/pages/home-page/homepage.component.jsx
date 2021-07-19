import LogoContainer from "../../components/logo-container/logo-container.component";

import React from "react";

import data from "./data";

import { HomePageContainer } from "./homepage.styles";

export const HomePage = () => {
  return (
    <HomePageContainer>
      {data.map((logo, index) => (
        <LogoContainer key={index} imageUrl={logo.image} brand={logo.brand} />
      ))}
    </HomePageContainer>
  );
};
