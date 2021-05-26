import "./phone-container.styles.scss";

import React from "react";

export const PhoneContainer = ({ image, phoneTitle }) => {
  return (
    <div className="phone-container">
      <div className="phone-image" style={{ backgroundImage: `url(${image})` }} />
      <span className="phone-title">{phoneTitle}</span>
    </div>
  );
};
