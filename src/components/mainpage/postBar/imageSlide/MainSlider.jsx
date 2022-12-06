import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import img1 from "../../../img/1.jpg";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/3.jpg";
import "./MainSlider.css";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 3;

  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentSlide((currentValue) => {
        if (currentValue < TOTAL_SLIDES) {
          return (
            setCurrentSlide(currentSlide + 1),
            (slideRef.current.style.transition = "all 1s ease-in-out"),
            (slideRef.current.style.transform = `translateX(-${currentSlide}00%)`)
          );
        } else {
          return setCurrentSlide(0);
        }
      });
    }, 5000);
    return () => clearTimeout(timeoutId);
   
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
       
      </SliderContainer>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  display: flex;
`;

