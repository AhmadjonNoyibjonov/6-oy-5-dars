import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name/index";
import Email from "./components/Email/index";
import Address from "./components/Address/index";
import Contact from "./components/contact/index";
import Country from "./components/Country/index";
import Button_cancel from "./components/Button_cancel/index";
import Button_submit from "./components/Button_submit/index";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function handleContactChange(e) {
    setContact(e.target.value);
  }

  function handleCountryChange(e) {
    setCountry(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (true) {
      const formData = { name, email, address, contact, country };
      console.log(formData);
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Forma muvaffaqiyatli saqlandi!");
    }
  };

  const handleCancel = () => {
    setName("");
    setEmail("");
    setAddress("");
    setContact("");
    setCountry("");
  };

  return (
    <div className="wrapper container">
      <h2>Edit address</h2>
      <form className="wrapper" onSubmit={handleSubmit}>
        <span>
          <Name value={name} onChange={handleNameChange} />
          <Email value={email} onChange={handleEmailChange} />
        </span>
        <Address value={address} onChange={handleAddressChange} />
        <span>
          <Contact value={contact} onChange={handleContactChange} />
          <Country value={country} onChange={handleCountryChange} />
        </span>
        <span>
          <Button_cancel onClick={handleCancel} />
          <Button_submit />
        </span>
      </form>
    </div>
  );
}

export default App;
