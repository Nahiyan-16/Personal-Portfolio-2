import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactPage } from "./components/contact-page";
import HomePage from "./components/home-page";

function App() {
  return (
    <div className="App bg-black">
      <HomePage />
      <ContactPage />
    </div>
  );
}

export default App;
