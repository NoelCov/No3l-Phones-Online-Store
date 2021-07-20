import React from "react";
import { Redirect } from "react-router";

import PhoneContainer from "../phone-container/phone-container.component";

import { PhonesContainerDiv } from "./phones-container.styles";

export const PhonesContainer = ({ phonesData }) => {
  return (
    <PhonesContainerDiv>
      {phonesData === undefined ? (
        <Redirect to="/" />
      ) : (
        phonesData.map((phone, index) => (
          <PhoneContainer key={index} phone={phone} />
        ))
      )}
    </PhonesContainerDiv>
  );
};
