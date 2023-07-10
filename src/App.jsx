import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./App.css";
import Footer from "./components/Footer";
import up from "../src/components/Images/up.png";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      setShowScrollToTop(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <Header button={toggleTheme} name={theme} />
        <Marquee />
        <Hero />
        <Projects />
        <Footer />
        {showScrollToTop && (
          <button className="scrollToTop" onClick={handleScrollToTop}>
            <img src={up} alt="" />
          </button>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
