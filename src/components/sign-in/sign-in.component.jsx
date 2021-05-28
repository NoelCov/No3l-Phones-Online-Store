import React from "react";

import "./sign-in.styles.scss";

import { PersonalizedContainer } from "../personalized-container/personalized-container.component";
import { PersonalizedInput } from "../personalized-input/personalized-input.component";
import { PersonalizedForm } from "../personalized-form/personalized-form.component";

export const SignIn = () => {
  return (
    <PersonalizedContainer>
      <div className="sign-in-container">
        <span className="sign-in-title">SIGN IN</span>
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
