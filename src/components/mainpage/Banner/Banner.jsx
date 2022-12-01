import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import blue from "../../../img/blue.jpg";
import bblue from "../../../img/bblue.jpg";
import ameral from "../../../img/ameral.jpg";
import logo from "../../../img/logo.jpg";
import retro from "../../../img/retro.jpg";
import logo3 from "../../../img/3logo.jpg";
import next from "../../../img/next.svg";
import prev from "../../../img/prev.svg";
import {
  Blue,
  Img,
  Logo,
  Title,
  Trip,
  Trip2,
  Trip3,
  Ameral,
  Title2,
  Comment,
  Comment2,
  Retro,
  Bblue,
  Balance,
  Logo3,
  Balancce,
  Next,
  Prev,
  Stop,
  NextWrap,
} from "./BannerStyle";
import { Link } from "react-router-dom";

function Banner() {
  const [stop, setStop] = useState();

  return (
    <Carousel
      autoPlay={false}
      stopAutoPlayOnHover
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          borderRadius: 10,
          width: "none",
          width: 0,
          height: 0,
          all: "unset",
          position: "relative",
          top: 50,
        },
        NextIcon: {
          right: "100px",
          position: "relative",
        },
      }}
      indicators={false}
      // interval={5000}
      // navButtonsAlwaysVisible={false}
      NextIcon={<Next src={next} />}
      PrevIcon={<Prev src={prev} />}
    >
      <Blue>
        <Img src={blue} />
        <Logo src={logo} />
        <Title>Trip Balance</Title>
        <Trip>추천여행지</Trip>
        <Trip2>추천여행지</Trip2>
        <Trip3>추천여행지</Trip3>
        <Stop>스톱</Stop>
      </Blue>
      <Ameral>
        <Img src={ameral} />
        <Link to="/start">
          <Retro src={retro} />
        </Link>
        <Title2>밸런스게임</Title2>
        <Comment>당신에게 맞는 여행지는 어디인가요?</Comment>
        <Comment2>밸런스 게임을 통해서 당신의 여행지를 찾아보세요</Comment2>
        <Stop>스톱</Stop>
      </Ameral>
      <Bblue>
        <Img src={bblue} />
        <Link to="/post">
          <Logo3 src={logo3} />
        </Link>
        <Balance>Best Balance Trip</Balance>
        <Balancce>가장 핫한 우리의 여행 이야기</Balancce>
        <Stop>스톱</Stop>
      </Bblue>
    </Carousel>
  );
}

export default Banner;
