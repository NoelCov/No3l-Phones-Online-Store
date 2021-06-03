import "./personalized-button.styles.scss";

import React from "react";

export const PersonalizedButton = ({ text, icon, onClick}) => {
  return (
    <button className="personalized-button" onClick={onClick}>
      <span className={icon && "icon"}>{icon}</span>
      {text}
    </button>
  );
};
