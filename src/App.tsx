import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BackgroundBeamsDemo } from "./components/background-beams";
import { TextGenerateEffect } from "./components/text-generate-effect";

function App() {
  return (
    <div className="App bg-black">
      <TextGenerateEffect
        words={"Hello, My Name is Nahiyan. A web developer"}
      />
      <BackgroundBeamsDemo />
    </div>
  );
}

export default App;
