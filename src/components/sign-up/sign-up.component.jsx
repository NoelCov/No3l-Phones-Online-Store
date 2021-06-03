import "./sign-up.styles.scss";

import React, { Component } from "react";

import { PersonalizedContainer } from "../personalized-container/personalized-container.component";
import { PersonalizedInput } from "../personalized-input/personalized-input.component";
import { PersonalizedButton } from "../personalized-button/personalized-button.component";

import { auth } from "../../firebase/firebase.utils";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
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
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user, "Success");

        this.setState({ name: "", email: "", password: "" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <PersonalizedContainer>
        <div className="sign-up-container">
          <span className="sign-up-title">CREATE ACCOUNT</span>
          <form
            className="personalized-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <PersonalizedInput
              type="text"
              name="name"
              label="Name"
              value={name}
              placeholder="Name"
              onChange={this.handleChange}
            />
            <PersonalizedInput
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
            <PersonalizedInput
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            <PersonalizedButton
              type="Submit"
              text="Sign Up"
              onClick={() => {
                this.handleSubmit(email, password);
              }}
            />
          </form>
        </div>
      </PersonalizedContainer>
    );
  }
}
