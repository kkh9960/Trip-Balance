import React from "react";
import styled from "styled-components";
import Layout from "./Layout";

const Header = () => {
  return (
    <Container>
      <Layout>
        <WriteWrap>
          <Logo>logo</Logo>

          <Posting>게시판</Posting>
          <Trip>여행추천</Trip>
          <Mypage>마이페이지</Mypage>
          <Logeout>로그아웃</Logeout>
        </WriteWrap>
      </Layout>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 1920px;

  height: 120px;
  background-color: #d9d9d9;

  margin: 0 auto;
`;
const Logo = styled.div`
  width: 321.06px;
  height: 105.3px;
  display: flex;
  border: 1px solid red;
`;
const WriteWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 5px;
`;

const Posting = styled.button`
  margin-top: 56px;
  margin-top: 10px;
`;
const Trip = styled.button`
  margin-top: 56px;
  margin-top: 10px;
`;

const Mypage = styled.button`
  margin-top: 56px;
  margin-top: 10px;
`;

const Logeout = styled.button`
  margin-top: 56px;
  margin-top: 10px;
`;
