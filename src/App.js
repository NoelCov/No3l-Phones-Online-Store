import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { NavBar } from "./components/navbar/navbar.component";
import { Footer } from "./components/footer/footer.component";
import { HomePage } from "./pages/home-page/homepage.component";
import { Phones } from "./pages/phones-page/phones-page.component";
import { InformationPage } from "./pages/information-page/information-page.component";
import { SignInPage } from "./pages/sign-in-page/sign-in-page.component";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={InformationPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route path="/" component={Phones} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
