import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { NavBar } from "./components/navbar/navbar.component";
import { Footer } from "./components/footer/footer.component";
import { HomePage } from "./pages/homepage/homepage.component";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
