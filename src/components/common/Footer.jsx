import React from "react";
import Layout from "./Layout";
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
        <Logo src="" />
        <Information>
          <Front>
            Thanks For Front:
            <a href="">곽규현</a>
            <a href="https://github.com/jnwnddh">이중오</a>
            <a href="">박성우</a>
            <a href="">조광익</a>
          </Front>
          <Back>
            Thanks For Back:
            <a href="">김영문</a>
            <a href="">방주은</a>
            <a href="">김장원</a>
          </Back>
          <Designer>Thanks For Designer: 서보영</Designer>
        </Information>
      </Layout>
    </Container>
  );
};

export default Footer;
