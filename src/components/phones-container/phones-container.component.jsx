import "./phones-container.styles.scss";

import React from "react";

import { PhoneContainer } from "../phone-container/phone-container.component";

export const PhonesContainer = ({ phonesData }) => {
  return (
    <div className="phones-container">
      {phonesData.map((phone, index) => (
        <PhoneContainer
          key={index}
          phoneTitle={phone.name}
          image={phone.imageUrl}
        />
      ))}
    </div>
  );
};
