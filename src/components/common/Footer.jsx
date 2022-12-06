import React from "react";

import * as t from "./FooterStyle";
import footerlogo from "../../img/footerlogo.svg";
const Footer = () => {
  return (
    <t.Container>
      <t.Wrap>
        <t.Footerlogo src={footerlogo} />
        <t.Title>(주)트립밸런스리더 :곽규현 부리더:김용문</t.Title>
        <t.Comment>
          주소 : (03161) 서울특별시 종로구 인사동 17길 41 사업자등록번호 :
          102-81-39488 사업자정보확인 통신판매업신고번호 : 종로01-1806호
          관광사업자 등록번호 : 제1993-000006호 개인정보 보호책임자 : 채철훈
          영업보증보험 : 5000억 1천만원 가입 팩스: 02-734-0392 이메일 :
          15771233@hanatour.com 고객센터 1577-1233 해외항공권문의 1899-1833
        </t.Comment>
        <t.Hanhae>도움주신 분들</t.Hanhae>
        <t.Front>FOR FORNT </t.Front>
        <t.Fronts>
          <t.FrontWrap>곽규현 박성우 조광익 이중오</t.FrontWrap>
        </t.Fronts>
        <t.Back>FOR BACK</t.Back>
        <t.Backs>
          <t.BackWrap>김용문 방주은 김장원</t.BackWrap>
        </t.Backs>
        <t.Best>
          “단기간의 성과에는 가차 없이 정직해지고 장기적으로는 낙관과 자신감을
          가지세요.”— 미국 사업가이자 Netflix 공동 CEO Reed Hastings
        </t.Best>
      </t.Wrap>

    </t.Container>
  );
};

export default Footer;
