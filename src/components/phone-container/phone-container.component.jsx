import "./phone-container.styles.scss";

import React from "react";

export const PhoneContainer = ({ image, phoneTitle }) => {
  return (
    <div className="phone-container">
      <div className="phone-image" style={{ backgroundImage: `url(${image})` }} />
      <span className="phone-title">{phoneTitle}</span>
      <div className="content">
        <span className="content-item">Buy this phone</span>
        <span className="content-item">View More</span>
      </div>
    </div>
  );
};
