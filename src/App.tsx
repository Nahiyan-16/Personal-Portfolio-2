import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactPage } from "./components/contact-page";
import HomePage from "./components/home-page";
import { TracingBeam } from "./components/tracing-beam";
import NavbarMenu from "./components/navbar";
import { BackgroundBeams } from "./components/contact-page";
import { Projects } from "./components/Projects/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="App bg-black mt-8 relative">
      <TracingBeam
        children={
          <>
            <NavbarMenu />
            <HomePage />
            <Projects />
            <About />
            <ContactPage />
          </>
        }
      />
      <div className="h-[700px] flex justify-center items-center text-[9rem] bg-neutral-950 w-[80%] ml-auto mr-auto mb-10">
        Powered by Aceternity
      </div>
    </div>
  );
}

export default App;
