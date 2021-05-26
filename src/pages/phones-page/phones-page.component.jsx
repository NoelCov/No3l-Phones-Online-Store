import React from "react";

import data from "../../data";

import { PhonesContainer } from "../../components/phones-container/phones-container.component";

var trimStart = require("lodash/trimStart");

export const Phones = ({ location }) => {
  const brandName = trimStart(location.pathname, "/");
  return <PhonesContainer phonesData={data[brandName]} />;
};
