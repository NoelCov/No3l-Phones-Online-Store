import "./personalized-button.styles.scss";

import React from "react";

export const PersonalizedButton = ({ text, type, icon = null }) => {
  return (
    <button className="personalized-button" type={type}>
      <span className={icon && "icon"}>{icon}</span>
      {text}
    </button>
  );
};
