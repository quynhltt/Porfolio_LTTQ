import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import { ThemeContext } from "../Theme";

export default function Layout({ Component }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`layout ${theme}`}>
      <Header />
      <div className="component">
        <Component />
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
