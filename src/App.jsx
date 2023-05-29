import React from "react";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Marquee />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
