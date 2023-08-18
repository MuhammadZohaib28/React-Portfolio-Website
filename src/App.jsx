import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Marquee from "./components/marquee/Marquee";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import "./App.css";
import Footer from "./components/footer/Footer";
import up from "../src/components/Images/up.png";
import Swal from "sweetalert2";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const url = "https://muhammedzohaib.vercel.app";

  useEffect(() => {
    Swal.fire({
      title: "THIS IS OLD WEBSITE",
      icon: "info",
      html:
        "Please visit <b>New Website</b>, " +
        '<a href="https://muhammedzohaib.vercel.app"><b>Click Here</b></a> ',
    });
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
