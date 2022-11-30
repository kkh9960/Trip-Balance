import styled from "styled-components";

export const Container1 = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 120px;
  margin: 0 auto;
  text-underline-position: under;
  transition: 0.5s;

  @media screen and (max-width: 480px) {
    position: fixed;
    height: 50px;
    transition: 0.5s;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  margin: 0 auto;
  text-underline-position: under;
  @media screen and (max-width: 480px) {
    position: fixed;
    height: 50px;
    transition: 0.5s;
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
  background-color: red;
  @media screen and (max-width: 480px) {
    display: flex;
    position: relative;
  }
`;

export const Logo = styled.img`
  width: 321.06px;
  height: 105.3px;
  display: flex;
  transition: 0.5s;
  @media screen and (max-width: 480px) {
    width: 80px;
    height: 40px;
    transition: 0.5s;
  }
`;

export const top = styled.button`
  @media screen and (max-width: 480px) {
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
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Mypage = styled.button`
  font-size: 24px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Login = styled.button`
  font-size: 24px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Logout = styled.button`
  font-size: 24px;
  display: flex;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
