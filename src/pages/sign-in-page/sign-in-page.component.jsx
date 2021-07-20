import React from "react";

import { SignInPageContainer } from "./sign-in-page.styles";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

export const SignInPage = () => {
  return (
    <SignInPageContainer>
      <SignIn />
      <SignUp />
    </SignInPageContainer>
  );
};
