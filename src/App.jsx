import React, { useState } from "react";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./App.css";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="app" id={theme}>
        <Header button = {toggleTheme}/>
        <Marquee />
        <Hero />
        <Projects />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
