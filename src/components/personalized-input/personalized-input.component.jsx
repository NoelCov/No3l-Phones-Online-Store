import React from "react";

import { PersonalizedInputContainer } from "./personalized-input.styles";

export const PersonalizedInput = ({ type, name, value, label, placeholder, onChange = null }) => {
  return (
    <PersonalizedInputContainer
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
