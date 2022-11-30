import styled from "styled-components";

export const Container1 = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 120px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    position: fixed;
    height: 50px;
    flex-wrap: wrap;
    align-items: center;
  }
  @media screen and (max-width: 960px) {
    position: fixed;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Container2 = styled.div`
  position: fixed;
  display: flex;
  z-index: 99;
  width: 100%;
  height: 120px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    position: fixed;
    height: 50px;
    transition: 0.5s;
    flex-wrap: wrap;
    align-items: center;
  }
  @media screen and (max-width: 960px) {
    position: fixed;
    transition: 0.5s;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const ContainerWhite = styled.div`
  height: 120px;
  background-color: #fff;
  margin: 0 auto;
`;

export const toggleBtn = styled.button`
  display: none;
  position: absolute;
  right: 38px;
  top: 38px;
  font-size: 34px;
  @media screen and (max-width: 480px) {
    display: block;
    right: 16px;
    top: 10px;
    font-size: 22px;
  }
  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const WriteWrap = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 1s;
  :hover {
    transition: 1s;
    background-color: rgba(0, 0, 0, 0.7);
  }
  button {
    color: white;
  }
  @media screen and (max-width: 480px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    top: 50px;
    width: 100%;
    align-items: center;
  }

  @media screen and (max-width: 960px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    width: 100%;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Logo = styled.img`
  width: 321.06px;
  height: 120px;
  display: flex;
  transition: 0.5s;
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 50px;

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
export const Game = styled.button`
  font-size: 34px;
  width: 170px;
  :hover {
    transition: 0.7s;
    scale: 1.5;
    transform: rotateY(360deg);
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Posting = styled.button`
  font-size: 24px;
  width: 170px;
  p {
    display: none;
  }
  :hover {
    p {
      display: block;
    }
  }
  /* :hover {
    p {
      display: block;
    }
  } */
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Mypage = styled.button`
  font-size: 24px;
  width: 170px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Login = styled.button`
  font-size: 24px;
  width: 170px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Logout = styled.button`
  font-size: 24px;
  width: 170px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
