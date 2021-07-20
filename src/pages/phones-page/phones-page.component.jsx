import React from "react";

import data from "../../data";

import { PhonesContainer } from "../../components/phones-container/phones-container.component";

import { PhonesPageContainer } from "./phones-page.styles";

var trimStart = require("lodash/trimStart");

export const PhonesPage = ({ location }) => {
  const brandName = trimStart(location.pathname, "/");
  return (
    <PhonesPageContainer>
      <PhonesContainer phonesData={data[brandName]} />
    </PhonesPageContainer>
  );
};
