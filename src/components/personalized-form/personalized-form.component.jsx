import "./personalized-form.styles.scss";

import React from "react";

export const PersonalizedForm = ({ children }) => {
  return <form className="personalized-form">{children}</form>;
};
