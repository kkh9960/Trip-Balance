import React from "react";
import Git from "../../img/git.svg";
import * as t from "./FooterStyle";
import footerlogo from "../../img/footerlogo.svg";
import design from "../../img/design.svg"
const Footer = () => {
  return (
    <t.Container>
      <t.Wrap>
        <t.Footerlogo src={footerlogo} alt="trip" />
        <t.Title>(주)트립밸런스리더 :곽규현 부리더:김용문</t.Title>
        <t.Comment>
          “단기간의 성과에는 가차 없이 정직해지고 장기적으로는 낙관과 자신감을
          가지세요.”— 미국 사업가이자 Netflix 공동 CEO Reed Hastings
        </t.Comment>
        <t.Hanhae>도움주신 분들</t.Hanhae>

        <t.Fronts>
          <t.FrontWrap>
            <t.GitWrap>FRONT</t.GitWrap>
            <t.GitWrap href="https://github.com/kkh9960">
              <t.Gitimg src={Git} />
              곽규현
            </t.GitWrap>
            <t.GitWrap href="">
              <t.Gitimg src={Git} /> 박성우
            </t.GitWrap>
            <t.GitWrap href="https://github.com/jnwnddh">
              <t.Gitimg src={Git} /> 이중오
            </t.GitWrap>
            <br></br>
            <t.GitWrap href="https://github.com/cho-light">
              <t.Gitimg src={Git} />
              조광익
            </t.GitWrap>
            <t.GitWrap href="https://linktr.ee/vozzang">
              <img src={design} />
              DESIGNER 서보영
            </t.GitWrap>
          </t.FrontWrap>
        </t.Fronts>
       
        <t.Backs>
          <t.BackWrap>
            <t.GitWrap>BACK</t.GitWrap>
            <t.GitWrap href="https://github.com/dydrkflqmdl">
              <t.Gitimg src={Git} />
              김용문
            </t.GitWrap>
            <t.GitWrap href="https://github.com/jueun330">
              <t.Gitimg src={Git} />
              방주은
            </t.GitWrap>
            <t.GitWrap href="https://github.com/chunngamm">
              <t.Gitimg src={Git} />
              김장원
            </t.GitWrap>
          </t.BackWrap>
        </t.Backs>
      </t.Wrap>
    </t.Container>
  );
};

export default Footer;
