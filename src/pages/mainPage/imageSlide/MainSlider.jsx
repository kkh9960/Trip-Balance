import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import img1 from "../../../img/1.jpg";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/3.jpg";
// import img4 from "../../../img/4.jpg";
import "./MainSlider.css";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 3;

  // const imgRef = useRef(null);
  // const [imgNone, setImgNone] = useState(false);

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
    }, 3111);
    return () => clearTimeout(timeoutId);
    // slideRef.current.style.transition = "all 0.5s ease-in-out";
    // slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <>
      <Container>
        <SliderContainer ref={slideRef}>
          <Slide img={img1} />
          <Slide img={img2} />
          <Slide img={img3} />
          {/* <div className="imgBox" id="imgNone">
            <img src={img1} ref={imgRef} />
            <div className="text">181818181818</div>
          </div>
          <div className="imgBox" id="imgNone">
            <img src={img2} ref={imgRef} />
            <div className="text">zzzzzzzzzzz</div>
          </div>
          <div className="imgBox" id="imgNone" ref={imgRef}>
            <img src={img3} ref={imgRef} />
            <div className="text">진짜 미치겠다</div>
          </div> */}
          {/* <Img2Content ref={slideRef}>
            <h1>Balance Game</h1>
          </Img2Content> */}
        </SliderContainer>
        <Button>z</Button>
      </Container>
    </>
  );
}
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const Button = styled.div`
  width: 40px;
  z-index: 1;
  padding: 10px;
  margin: 10px;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  display: flex;
`;

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
