import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import TripImage from "../../img/trip.jpg";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <Container>
      <Layout>
        <Compeney>
          Trip Balance
        </Compeney>
        <Logo src={TripImage} />
        <Information>
          <Front>
            Thanks For Front:
            <a href="">
              <AiFillGithub />
              곽규현
            </a>
            <a href="https://github.com/jnwnddh">
              <AiFillGithub />
              이중오
            </a>
            <a href="">
              <AiFillGithub />
              박성우
            </a>
            <a href="">
              <AiFillGithub />
              조광익
            </a>
          </Front>
          <Back>
            Thanks For Back:
            <a href="">
              <AiFillGithub />
              김영문
            </a>
            <a href="">
              <AiFillGithub />
              방주은
            </a>
            <a href="">
              <AiFillGithub />
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

const Container = styled.div`
  background-color: #808080;
  height: 432.91px;
`;
const Compeney = styled.div`
  width: 953px;
  height: 24px;
  margin: 0px 434.4px 51.7px 5px;
  font-family: Inter;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  position: relative;
  /* margin-top: 41.8px; */
`;
const Information = styled.div`
  width: 1088px;
  height: 168px;
  margin: 51.7px 0 42.8px 304.4px;
  font-family: Inter;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  position: relative;
  margin-top: -100px;
`;
const Logo = styled.img`
  width: 300px;
  position: relative;
  bottom: -15px;
`;
const Front = styled.div``;
const Back = styled.div``;
const Designer = styled.div``;
