import React, { useEffect, useState } from "react";
import "./ScrollTopButtonStyle.css";

export default function ScrollTopButton() {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState("nonedisplay");

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 450) {
      setBtnStatus(() => "showdisplay");
    } else {
      setBtnStatus(() => "nonedisplay");
    }
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button>
      <div className={btnStatus} onClick={scrollToTop}>
        위로가기 버튼임
      </div>
    </button>
  );
}
