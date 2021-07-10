import React from "react";
import { Link } from "react-router-dom";

import { FooterContainer, FooterLinkContainer } from "./footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/about">
        <FooterLinkContainer>Customer Service</FooterLinkContainer>
      </Link>
      <Link to="/about">
        <FooterLinkContainer>FAQ</FooterLinkContainer>
      </Link>
      <Link to="/about">
        <FooterLinkContainer>About us</FooterLinkContainer>
      </Link>
    </FooterContainer>
  );
};
