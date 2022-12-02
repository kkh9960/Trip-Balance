import React from "react";
import Layout from "./Layout";
import TripImage from "../../img/trip.jpg";
import {
  Container,
  Compeney,
  Information,
  Logo,
  Front,
  Back,
  Designer,
} from "./FooterStyle";
const Footer = () => {
  return (
    <Container>
      <Layout>
        <Compeney>Trip Balance</Compeney>
        <Logo src={TripImage} />
        <Information>
          <Front>
            Thanks For Front:
            <a href="">
              {/* <AiFillGithub /> */}
              곽규현
            </a>
            <a href="https://github.com/jnwnddh">
              {/* <AiFillGithub /> */}
              이중오
            </a>
            <a href="">
              {/* <AiFillGithub /> */}
              박성우
            </a>
            <a href="">
              {/* <AiFillGithub /> */}
              조광익
            </a>
          </Front>
          <Back>
            Thanks For Back:
            <a href="">
              {/* <AiFillGithub /> */}
              김영문
            </a>
            <a href="">
              {/* <AiFillGithub /> */}
              방주은
            </a>
            <a href="">
              {/* <AiFillGithub /> */}
              김장원
            </a>
          </Back>
          <Designer>Thanks For Designer: 서보영</Designer>
        </Information>
      </Layout>
    </Container>
  );
};

export default Footer;
