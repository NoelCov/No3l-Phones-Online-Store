import React from "react";

import {
  PersonalizedButtonContainer,
  Icon,
} from "./personalized-button.styles";

export const PersonalizedButton = ({ text, icon, onClick }) => {
  return (
    <PersonalizedButtonContainer onClick={onClick}>
      <Icon>{icon}</Icon>
      {text}
    </PersonalizedButtonContainer>
  );
};
