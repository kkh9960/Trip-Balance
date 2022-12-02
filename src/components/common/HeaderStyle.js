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
  background-color: rgba(0, 0, 0, 0.5);
  :hover {
    transition: 1s;
    background-color: rgba(0, 0, 0, 0.7);
  }
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
  background-color: rgba(0, 0, 0, 0.5);
  :hover {
    transition: 1s;
    background-color: rgba(0, 0, 0, 0.7);
  }
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

export const toggleBtn = styled.div`
  display: none;
  position: absolute;
  right: 38px;
  margin: auto 0;
  scale: 1.5;
  cursor: pointer;
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
  justify-content: center;
  transition: 1s;
  img {
    scale: 0.3;
  }
  div {
    color: white;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 960px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    width: 100%;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    img {
      scale: 0.2;
    }
  }
`;

export const Logo = styled.img`
  width: 274.47px;
  height: 90px;
  display: flex;
  transition: 0.5s;
  margin-left: 300px;
  transition: 1s;
  @media screen and (max-width: 480px) {
    width: 140px;
    height: 46px;
    transition: 0.5s;
    margin-left: 30px;
    transition: 1s;
  }
  @media screen and (max-width: 960px) {
    width: 140px;
    height: 46px;
    margin: 37px 0;
    transition: 0.5s;
    margin-left: 30px;
    transition: 1s;
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
export const Game = styled.div`
  font-size: 24px;
  width: 170px;
  cursor: pointer;
  p {
    display: none;
  }
  :hover {
    p {
      display: block;
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    img {
      display: none;
    }
    p {
      display: block;
    }
  }
`;

export const Posting = styled.div`
  font-size: 24px;
  width: 170px;
  cursor: pointer;
  p {
    display: none;
  }
  :hover {
    p {
      display: block;
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    img {
      display: none;
    }
    p {
      display: block;
    }
  }
`;

export const Mypage = styled.div`
  font-size: 24px;
  width: 170px;
  cursor: pointer;
  p {
    display: none;
  }
  :hover {
    p {
      display: block;
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    img {
      display: none;
    }
    p {
      display: block;
    }
  }
`;

export const Login = styled.div`
  font-size: 24px;
  width: 170px;
  cursor: pointer;
  p {
    display: none;
  }
  :hover {
    p {
      display: block;
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    img {
      display: none;
    }
    p {
      display: block;
    }
  }
`;

export const Logout = styled.div`
  font-size: 24px;
  width: 170px;
  cursor: pointer;
  p {
    display: none;
  }
  :hover {
    p {
      display: block;
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    img {
      display: none;
    }
    p {
      display: block;
    }
  }
`;
