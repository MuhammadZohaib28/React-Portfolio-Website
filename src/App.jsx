import React, { useState }  from "react";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  
  return (
    <div className="app">
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <Header />
      <Marquee />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
