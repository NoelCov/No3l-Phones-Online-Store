import React from "react";

import data from "../../data";

import { PhonesContainer } from "../../components/phones-container/phones-container.component";

import "./phones-page.styles.scss";

var trimStart = require("lodash/trimStart");

export const PhonesPage = ({ location }) => {
  const brandName = trimStart(location.pathname, "/");
  return (
    <div className="phones-page">
      <PhonesContainer phonesData={data[brandName]} />
    </div>
  );
};
