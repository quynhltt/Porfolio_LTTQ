import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Layout({ Component }) {
  return (
    <div>
      <Header />
      <Component />
      <Footer />
    </div>
  );
}
