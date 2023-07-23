import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Marquee from "./components/marquee/Marquee";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import "./App.css";
import Footer from "./components/footer/Footer";
import up from "../src/components/Images/up.png";

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
  );
};

export default App;
