import React from "react";

import "./App.css"

import { NavBar } from "./components/navbar/navbar.component";
import { LogosContainer } from "./components/logos-container/logos-container.component";
import { Footer } from "./components/footer/footer.component";

const App = () => {
  return (
    <div>
      <NavBar />
      <LogosContainer />
      <Footer />
    </div>
  );
};

export default App;
