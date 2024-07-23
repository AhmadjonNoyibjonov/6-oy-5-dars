import { useState } from "react";
import "./App.css";
import Name from "./components/Name/index";
import Email from "./components/Email/index";
import Address from "./components/Address/index";
import Contact from "./components/contact/index";

function App() {
  return (
    <>
      <div className="wrapper container">
        <h2>Edit address</h2>
        <span>
          <Name />
          <Email />
        </span>

        <Address />

        <Contact />
      </div>
    </>
  );
}

export default App;
