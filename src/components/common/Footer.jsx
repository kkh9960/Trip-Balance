import React from "react";
import Layout from "./Layout";
import mainlogo from "../../img/mainlogo.png";
// import { AiFillGithub } from "react-icons/ai";
import * as t from "./FooterStyle";

const Footer = () => {
  return (
    <t.Container>
      <>
        <t.Compeney>Trip Balance</t.Compeney>
        <t.Logo src={mainlogo} />
        <t.Information>
          {/* <t.Front>
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
          </t.Front>
          <t.Back>
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
          </t.Back>
          <t.Designer>Thanks For Designer: 서보영</t.Designer> */}
        </t.Information>
      </>
    </t.Container>
  );
};

export default Footer;
