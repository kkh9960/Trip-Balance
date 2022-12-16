import styled from "styled-components";

export const userName = styled.div`
  @media screen and (min-width: 481px) {
    width: 500px;
    font-size: 28px;
    animation: 3s;
    animation-name: mypageOpacity;
    margin: 0 0 5px 300px;
    span {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 28px;
    margin: 0 auto 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 22px;
    }
  }
`;

export const ProfileInformationView = styled.div`
  @media screen and (min-width: 481px) {
    width: 1326px;
    margin: 0 auto;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 1520px;
  }
`;

export const UserInfor = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  gap: 25px;
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const myInformation = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  animation: 2s;
  animation-name: mypageOpacity;
  @keyframes mypageOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 480px) {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    margin-bottom: 40px;
  }
`;

export const ProfileImgBox = styled.img`
  @media screen and (min-width: 481px) {
    z-index: 1;
    width: 315px;
    height: 315px;
    margin: 20px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 6px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 480px) {
    width: 230px;
    height: 230px;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 50%;
    border: 5px double gray;
    box-shadow: 0 0 6px;
    transition: 0.2s linear;
  }
`;
export const profileImgChange = styled.div`
  @media screen and (min-width: 481px) {
    z-index: 1;
    width: 43px;
    height: 43px;
    background-color: #f2f2f2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 250px;
    bottom: 100px;
    cursor: pointer;
    box-shadow: 0 0 4px;
  }
  @media screen and (max-width: 480px) {
    width: 43px;
    height: 43px;
    background-color: #f2f2f2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 90px;
    top: 210px;
    cursor: pointer;
    box-shadow: 0 0 4px;
  }
`;

export const camera = styled.img`
  width: 25px;
`;

export const profileinfo = styled.div`
  @media screen and (min-width: 481px) {
    position: relative;
    width: 250px;
    height: 100%;
    margin: 0 5px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
export const mobileID = styled.div`
  @media screen and (min-width: 481px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto 30px;
  }
`;

export const nickName = styled.div`
  top: 80px;
  position: absolute;

  width: 280px;
  height: 40px;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const nickInput = styled.input`
  @media screen and (min-width: 481px) {
    height: 35px;
    font-size: 15px;
    border: 0;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    background-color: #d9d9d9;
  }
  @media screen and (max-width: 480px) {
    height: 35px;
    font-size: 15px;
    border: 0;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    background-color: #d9d9d9;
  }
`;
export const mobileNickName = styled.div`
  @media screen and (min-width: 481px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #333;
  }
`;
export const email = styled.div`
  top: 120px;
  left: 5px;
  position: absolute;
  width: 230px;
  height: 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #848484;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const mobileEmail = styled.div`
  @media screen and (min-width: 481px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    margin: 0 auto;
    width: 150px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #848484;
  }
`;
export const introduce = styled.div`
  @media screen and (min-width: 481px) {
    position: absolute;
    top: 160px;
  }
  @media screen and (max-width: 480px) {
    width: 98%;
    margin: 0 auto 20px;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const textName = styled.label`
  @media screen and (min-width: 481px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const selfBox = styled.textarea`
  @media screen and (min-width: 481px) {
    resize: none;
    overflow: hidden;
    font-size: 15px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    height: 90px;
    outline: none;
    padding-left: 10px;
    background-color: #d9d9d9;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    border: 0;
    border-radius: 5px;
    margin: 0 auto;
    width: 70%;
    height: 50px;
    outline: none;
    padding-left: 10px;
    background-color: #d9d9d9;
  }
`;
export const linkBox = styled.input`
  height: 33px;
  font-size: 15px;
  border: 0;
  border-radius: 0 5px 5px 0;
  outline: none;
  padding-left: 10px;
  margin-left: -10px;
  cursor: pointer;
`;

export const snsLink = styled.div`
  @media screen and (min-width: 481px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 290px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
export const linkWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const link = styled.a`
  text-decoration: none;
  display: flex;
  color: white;
  margin-bottom: 10px;
`;
export const snsIcon = styled.img`
  width: 35px;
  height: 35px;
  z-index: 1;
  margin-right: 10px;
`;

export const snsInput = styled.input`
  height: 33px;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  margin-left: -5px;
  background-color: #d9d9d9;
  transition: 1;
  animation: 0.5s;
  animation-name: inputslide;
  @keyframes inputslide {
    from {
      transform: translateX(-15px);
    }
    to {
      transform: translateX(-0px);
    }
  }
`;

export const instaLinkbox = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: flex-start;
`;
export const faceLinkbox = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: flex-start;
`;
export const youLinkbox = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: flex-start;
`;
export const buttonGroup = styled.div`
  @media screen and (min-width: 481px) {
    position: absolute;
    z-index: 0;
    bottom: 56px;
    left: 116px;
    width: 120px;
    height: 68px;
    border: 2px solid gray;
    border-radius: 20px;
    display: flex;
    align-items: end;
    justify-content: center;
    box-shadow: 0 0 2px;
    transition: 0.5s;
    :hover {
      transition: 0.5s;
      transform: translateY(2px);
    }
    button {
      width: 100%;
      font-size: 15px;
      margin-bottom: 7px;
      color: black;
      transition: 0.2s linear;
      font-weight: 700;
    }
    button:hover {
      color: #333;
      transition: 0.2s linear;
    }
  }
  @media screen and (max-width: 480px) {
    width: 70%;
    height: 48px;
    border: 2px solid gray;
    border-radius: 10px;
    margin: 0 auto;
    button {
      width: 100%;
      height: 100%;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      text-align: center;
      color: black;
      transition: 0.2s linear;
    }
  }
`;
