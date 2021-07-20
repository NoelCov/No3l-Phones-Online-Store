import React, { Component } from "react";

import { PersonalizedContainer } from "../personalized-container/personalized-container.component";
import { PersonalizedInput } from "../personalized-input/personalized-input.component";
import { PersonalizedButton } from "../personalized-button/personalized-button.component";

import { GrGoogle } from "react-icons/gr";

import {
  signInWithGoogle,
  auth,
  createUser,
} from "../../firebase/firebase.utils";

import {
  SignInContainer,
  SignInTitleContainer,
  PersonalizedFormContainer,
} from "./sign-in.styles";

export default class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        createUser(user);
        this.setState({ email: "", password: "" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <PersonalizedContainer>
        <SignInContainer>
          <SignInTitleContainer>SIGN IN</SignInTitleContainer>
          <PersonalizedFormContainer
            onSubmit={(event) => event.preventDefault()}
          >
            <PersonalizedInput
              type="email"
              name="email"
              label="Email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <PersonalizedInput
              type="password"
              name="password"
              label="Password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <PersonalizedButton
              type="Submit"
              text="Sign In"
              onClick={() => this.handleSubmit(email, password)}
            />
            <PersonalizedButton
              onClick={signInWithGoogle}
              text="Sign In with Google"
              icon={<GrGoogle />}
            />
          </PersonalizedFormContainer>
        </SignInContainer>
      </PersonalizedContainer>
    );
  }
}
