import styled from "styled-components";

export const BannerSection = styled.div`
  width: 1325px;
  background-color: red;
`;
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
  @media screen and (max-width: 480px) {
    position: fixed;
    height: 30px;
    flex-wrap: wrap;
    align-items: center;
  }
  @media screen and (max-width: 1240px) {
    position: fixed;
    flex-wrap: wrap;
    align-items: center;
    transition: 1s;
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

  @media screen and (max-width: 480px) {
    position: fixed;
    height: 30px;
    transition: 0.5s;
    flex-wrap: wrap;
    align-items: center;
  }
  @media screen and (max-width: 1240px) {
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

export const toggleBtn = styled.img`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 60px;
  @media screen and (max-width: 480px) {
    display: ${(props) => (props.toggle ? "flex" : "none")};
    scale: 0.5;
    position: absolute;
    right: 20px;
  }
  @media screen and (max-width: 1240px) {
    display: ${(props) => (props.toggle ? "flex" : "none")};
  }
`;

export const toggleCancelBtn = styled.img`
  display: ${(props) => (props.toggle ? "none" : "flex")};
  cursor: pointer;
  position: absolute;
  right: 60px;
  @media screen and (max-width: 480px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    scale: 0.5;
    position: absolute;
    right: 20px;
  }
  @media screen and (max-width: 1240px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
  }
`;
export const WriteWrap = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 1s;
  div {
    color: white;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    width: 100%;
    height: 230px;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }

  @media screen and (max-width: 1240px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    width: 100%;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const LogoBox = styled.div`
  width: 274.47px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 144px;
    height: 100%;
    margin: auto;
  }
  @media screen and (max-width: 1240px) {
    width: 274.47px;
    height: 100%;
  }
`;
export const Logo = styled.img`
  width: 274.47px;
  height: 90px;
  display: flex;
  transition: 0.5s;
  margin-left: 250px;
  transition: 1s;
  @media screen and (max-width: 480px) {
    scale: 0.5;
    transition: 0.5s;
    margin-left: 30px;
  }
  @media screen and (max-width: 1240px) {
    width: 144px;
    height: 50px;
    transition: 0.5s;
    margin: auto;
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

export const survey = styled.div`
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

export const surveyLink = styled.a`
  text-decoration: none;
  color: white;
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
    font-size: 14px;

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
    font-size: 14px;
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
    font-size: 14px;
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
    font-size: 14px;
    img {
      display: none;
    }
    p {
      display: block;
    }
  }
`;
