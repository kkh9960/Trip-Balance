import styled from "styled-components";

export const Container1 = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 120px;
  margin: 0 auto;
  text-underline-position: under;
  @media screen and (max-width: 500px) {
    position: fixed;
    height: 50px;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  margin: 0 auto;
  text-underline-position: under;
  @media screen and (max-width: 500px) {
    position: fixed;
    height: 50px;
  }
`;

export const ContainerWhite = styled.div`
  height: 120px;
  background-color: #fff;
  margin: 0 auto;
`;

export const WriteWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 5px;
  @media screen and (max-width: 500px) {
    display: flex;
    position: relative;
  }
`;

export const Logo = styled.img`
  width: 321.06px;
  height: 105.3px;
  display: flex;
  @media screen and (max-width: 500px) {
    width: 80px;
    height: 40px;
  }
`;

export const top = styled.button`
  @media screen and (max-width: 500px) {
    width: 240px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Posting = styled.button`
  font-size: 24px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Mypage = styled.button`
  font-size: 24px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Login = styled.button`
  font-size: 24px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Logout = styled.button`
  font-size: 24px;
  display: flex;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
