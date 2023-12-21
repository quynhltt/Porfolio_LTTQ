import React, { useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  let toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button className={`back-to-top-btn flex items-center justify-center ${visible ? "showed" : "notShowed"}`} onClick={scrollToTop}>
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
}
