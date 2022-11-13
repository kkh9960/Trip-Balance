import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CardSlide = () => {
  return (
    <Carousel responsive={responsive}>
      <ImgBox src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg" />

      <ImgBox src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg" />
      <ImgBox src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg" />
      <ImgBox src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg" />
      <ImgBox src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg" />
      <ImgBox src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg" />
      <ImgBox src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg" />
      <ImgBox src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg" />
      <ImgBox src="https://cdn.pixabay.com/photo/2016/08/01/20/15/girl-1562025__340.jpg" />
    </Carousel>
  );
};

export default CardSlide;

const ImgBox = styled.img`
  background-position: center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  width: 344px;
  height: 274px;
  border-radius: 10%;
`;
