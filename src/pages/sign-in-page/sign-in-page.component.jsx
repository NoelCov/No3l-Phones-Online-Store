import React from "react";

import "./sign-in-page.styles.scss";

import { SignIn } from "../../components/sign-in/sign-in.component";
import { SignUp } from "../../components/sign-up/sign-up.component";

export const SignInPage = () => {
  return (
    <div className="signInPage">
      <SignIn />
      <SignUp />
    </div>
  );
};
