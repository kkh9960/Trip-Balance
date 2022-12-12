import styled from "styled-components";

export const BannerSection = styled.div``;
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
  @media screen and (max-width: 1240px) {
    position: fixed;
    flex-wrap: wrap;
    align-items: center;
    transition: 1s;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 480px) {
    position: fixed;
    height: 30px;
    flex-wrap: wrap;
    align-items: center;
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
  @media screen and (max-width: 1240px) {
    position: fixed;
    transition: 0.5s;
    flex-wrap: wrap;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    position: fixed;
    height: 30px;
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
  @media screen and (max-width: 1240px) {
    display: ${(props) => (props.toggle ? "flex" : "none")};
  }
  @media screen and (max-width: 480px) {
    display: ${(props) => (props.toggle ? "flex" : "none")};
    width: 18px;
    position: absolute;
    right: 20px;
  }
`;

export const toggleCancelBtn = styled.img`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 60px;
  @media screen and (max-width: 1240px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
  }
  @media screen and (max-width: 480px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    width: 12px;
    position: absolute;
    right: 20px;
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

  @media screen and (max-width: 1240px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    width: 100%;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 480px) {
    display: ${(props) => (props.toggle ? "none" : "flex")};
    width: 100%;
    height: 230px;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

export const LogoBox = styled.div`
  width: 274.47px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1240px) {
    width: 274.47px;
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 144px;
    height: 100%;
    margin: auto;
  }
`;
export const Logo = styled.img`
  width: 274.47px;
  height: 90px;
  display: flex;
  transition: 0.5s;
  margin-left: 250px;
  transition: 1s;
  @media screen and (max-width: 1240px) {
    width: 144px;
    height: 50px;
    transition: 0.5s;
    margin: auto;
    transition: 1s;
  }
  @media screen and (max-width: 480px) {
    width: 93px;
    height: 30px;
    transition: 0.5s;
    margin-left: 30px;
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
    display: block;
  }
  img {
    display: none;
  }
  :hover {
    p {
      display: none;
    }
    img {
      display: flex;
      margin: 0 auto;
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
    display: block;
  }
  img {
    display: none;
  }
  :hover {
    p {
      display: none;
    }
    img {
      display: flex;
      margin: 0 auto;
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
    display: block;
  }
  img {
    display: none;
  }
  :hover {
    p {
      display: none;
    }
    img {
      display: flex;
      margin: 0 auto;
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
    display: block;
  }
  img {
    display: none;
  }
  :hover {
    p {
      display: none;
    }
    img {
      display: flex;
      margin: 0 auto;
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
    display: block;
  }
  img {
    display: none;
  }
  :hover {
    p {
      display: none;
    }
    img {
      display: flex;
      margin: 0 auto;
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
    display: block;
  }
  img {
    display: none;
  }
  :hover {
    p {
      display: none;
    }
    img {
      display: flex;
      margin: 0 auto;
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
