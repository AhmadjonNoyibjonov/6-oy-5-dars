import "./App.css";
import Name from "./components/Name/index";
import Email from "./components/Email/index";
import Address from "./components/Address/index";
import Contact from "./components/contact/index";
import Country from "./components/Country/index";
import Button_cancel from "./components/Button_cancel/index";
import Button_submit from "./components/Button_submit/index";

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

        <span>
          <Contact />
          <Country />
        </span>
        <span>
          <Button_cancel />
          <Button_submit />
        </span>
      </div>
    </>
  );
}

export default App;
