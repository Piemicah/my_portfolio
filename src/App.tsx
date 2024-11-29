import { Route, Routes } from "react-router-dom";
import Footbar from "./components/Footbar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footbar />
    </div>
  );
}

export default App;
