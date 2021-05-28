import "./sign-up.styles.scss";

import React from "react";

import { PersonalizedContainer } from "../personalized-container/personalized-container.component";
import { PersonalizedInput } from "../personalized-input/personalized-input.component";
import { PersonalizedForm } from "../personalized-form/personalized-form.component";

export const SignUp = () => {
  return (
    <PersonalizedContainer>
      <div className="sign-up-container">
        <span className="sign-up-title">CREATE ACCOUNT</span>
        <PersonalizedForm>
          <PersonalizedInput
            type="text"
            name="name"
            label="Name"
            value="Name"
          />
          <PersonalizedInput
            type="email"
            name="email"
            label="Email"
            value="Email"
          />
          <PersonalizedInput
            type="password"
            name="password"
            label="Password"
            value="Password"
          />
        </PersonalizedForm>
      </div>
    </PersonalizedContainer>
  );
};
