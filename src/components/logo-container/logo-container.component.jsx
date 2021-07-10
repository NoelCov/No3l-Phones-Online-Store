import React from "react";
import { generatePath, withRouter } from "react-router";

import { ContainerLogo, ImageContainer } from "./logo-container.styles";

const LogoContainer = ({ imageUrl, brand, history }) => {
  const handleClick = () => {
    // Generate the url for the user
    const url = generatePath("/:brand", {
      brand: brand,
    });
    history.push(`${url}`);
  };

  return (
    <ContainerLogo onClick={handleClick}>
      <ImageContainer src={imageUrl} alt="company logo" />
    </ContainerLogo>
  );
};

export default withRouter(LogoContainer);
