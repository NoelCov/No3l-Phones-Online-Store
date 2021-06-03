import React, { Component } from "react";

import "./sign-in.styles.scss";

import { PersonalizedContainer } from "../personalized-container/personalized-container.component";
import { PersonalizedInput } from "../personalized-input/personalized-input.component";
import { PersonalizedButton } from "../personalized-button/personalized-button.component";

import { GrGoogle } from "react-icons/gr";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

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
      .then(() => {
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
        <div className="sign-in-container">
          <span className="sign-in-title">SIGN IN</span>
          <form
            className="personalized-form"
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
          </form>
        </div>
      </PersonalizedContainer>
    );
  }
}
