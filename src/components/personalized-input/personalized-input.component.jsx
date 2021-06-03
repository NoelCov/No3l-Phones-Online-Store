import React from "react";

import "./personalized-input.styles.scss";

export const PersonalizedInput = ({ type, name, value, label, placeholder, onChange = null }) => {
  return (
    <input
      className="input"
      type={type}
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};
