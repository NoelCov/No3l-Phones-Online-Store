import React from "react";

import "./personalized-input.styles.scss";

export const PersonalizedInput = ({ type, name, value, label }) => {
  return (
    <input
      className="input"
      type={type}
      name={name}
      label={value}
      value={label}
      required
    />
  );
};
