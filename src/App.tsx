import "./App.css";
import { ContactPage } from "./components/contact-page";
import HomePage from "./components/home-page";
import { TracingBeam } from "./components/tracing-beam";
import NavbarMenu from "./components/navbar";
import { Projects } from "./components/Projects/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="App bg-black mt-8">
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
    </div>
  );
}

export default App;
