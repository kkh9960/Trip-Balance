import React, { useEffect, useRef, useState } from "react";

import * as t from "./MainSliderStyle";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const [move, setMove] = useState(true);
  const TOTAL_SLIDES = 3;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentSlide(() => {
        if (currentSlide < 4) {
          return (
            setCurrentSlide(currentSlide + 1),
            (slideRef.current.style.transition = "all 1s ease-in-out"),
            (slideRef.current.style.transform = `translateX(-${currentSlide}00%)`)
          );
        } else {
          return (
            (slideRef.current.style.transition = "none"),
            (slideRef.current.style.transform = `translateX(0)`),
            setCurrentSlide(0)
          );
        }
      });
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [currentSlide]);

  // const interval = setInterval(500);
  // const stop = () => {
  //   if (move) {
  //     clearInterval(interval);
  //     setMove = false;
  //   } else {
  //     interval = setInterval();
  //     setMove = true;
  //   }
  // };

  return (
    <t.Container>
      <t.SliderContainer ref={slideRef}>
        <t.Slide1>
          <t.text1>Trip Balance</t.text1>
        </t.Slide1>
        <t.Slide2>
          <t.text2>2</t.text2>
        </t.Slide2>
        <t.Slide3>
          <t.text3>3</t.text3>
        </t.Slide3>
        <t.Slide1>
          <t.text1>clone1</t.text1>
        </t.Slide1>
        <t.Slide2>
          <t.text1>clone2</t.text1>
        </t.Slide2>
      </t.SliderContainer>
      <button onClick={""}>이것은 버튼입니다.</button>
    </t.Container>
  );
}

// const Img1Content = styled.div`
//   position: absolute;
//   margin: 100px 100px;
//   display: table;
//   z-index: 100;
//   display: flex;
//   flex-direction: column;
//   h1 {
//     all: unset;
//     font-family: sans-serif;
//     font-size: 70px;
//     line-height: 48px;
//     text-align: center;
//     color: #faf0f0;
//   }
// `;
// const Img2Content = styled.div`
//   position: absolute;
//   margin: 100px 4000px;
//   display: table;
//   z-index: 100;
//   display: flex;
//   flex-direction: column;
//   h1 {
//     all: unset;
//     font-family: sans-serif;
//     font-size: 70px;
//     line-height: 48px;
//     text-align: center;
//     color: #faf0f0;
//   }
// `;
