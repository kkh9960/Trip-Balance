import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import bg from "../../../img/1.jpg";
import bg1 from "../../../img/2.jpg";
import bg2 from "../../../img/3.jpg";
import "./MainPageImageSlideStyle.css";

export default function ImageSlide() {
  const images = [bg, bg1, bg2];

  return (
    <SimpleImageSlider
      style={{ objectFit: "cover", position: "relative" }}
      width="100%"
      height="880px"
      images={images}
      navMargin={10}
      navSize={70}
      navStyle={1}
      showBullets={true}
      showNavs={true}
      slideDuration={0.5}
      autoPlay={true}
      autoPlayDelay={4.0}
    />
  );
}
