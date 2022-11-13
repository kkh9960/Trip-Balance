import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import TripImage from "../image/trip.jpg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Layout>
        <WriteWrap>
          <Logo src={TripImage} />

          <Posting
            onClick={() => {
              navigate("/post");
            }}
          >
            게시판
          </Posting>
          <Trip>추천여행지</Trip>
          <Mypage>마이페이지</Mypage>
          <Logeout
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </Logeout>
        </WriteWrap>
      </Layout>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 120px;
  background-color: #fff;
  margin: 0 auto;
`;
const Logo = styled.img`
  width: 321.06px;
  height: 105.3px;
  display: flex;
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
  font-size: 24px;
`;
const Trip = styled.button`
  margin-top: 56px;
  margin-top: 10px;
  font-size: 24px;
`;

const Mypage = styled.button`
  margin-top: 56px;
  margin-top: 10px;
  font-size: 24px;
`;

const Logeout = styled.button`
  margin-top: 56px;
  margin-top: 10px;
  font-size: 24px;
`;
