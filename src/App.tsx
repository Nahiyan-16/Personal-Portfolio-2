import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactPage } from "./components/contact-page";
import HomePage from "./components/home-page";
import { FloatingNav } from "./components/navbar";
import { TracingBeam } from "./components/tracing-beam";

function App() {
  const testProps = {
    navItems: [
      { name: "Home", link: "/home" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ],
    className: "custom-class",
  };
  return (
    <div className="App bg-black scrollable-content">
      <TracingBeam
        children={
          <>
            <FloatingNav {...testProps} />
            <HomePage />
            <ContactPage />
          </>
        }
      />
      <div className="h-[700px] flex justify-center items-center text-[9rem] bg-neutral-950 w-[80%] ml-auto mr-auto mb-10 rounded-bottom">
        Powered by Aceternity
      </div>
    </div>
  );
}

export default App;
