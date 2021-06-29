import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import NavBar from "./components/navbar/navbar.component";
import { Footer } from "./components/footer/footer.component";
import { HomePage } from "./pages/home-page/homepage.component";
import { PhonesPage } from "./pages/phones-page/phones-page.component";
import { InformationPage } from "./pages/information-page/information-page.component";
import { SignInPage } from "./pages/sign-in-page/sign-in-page.component";
import PaymentPage from "./pages/payment-page/payment-page.component";

import { auth } from "./firebase/firebase.utils";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <div className="page-content">
          <NavBar currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={InformationPage} />
            <Route
              exact
              path="/payment"
              render={() => (currentUser ? <PaymentPage /> : <SignInPage />)}
            />
            <Route
              exact
              path="/signin"
              render={() => (currentUser ? <HomePage /> : <SignInPage />)}
            />
            <Route path="/" component={PhonesPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}