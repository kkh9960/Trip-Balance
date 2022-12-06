import styled from "styled-components";

export const userName = styled.div`
  width: 500px;
  font-size: 28px;
  animation: 3s;
  animation-name: slideLeft;
  margin: 0 0 5px 300px;
  span {
    font-size: 22px;
  }
`;

export const ProfileInformationView = styled.div``;

export const UserInfor = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-content: center;
  justify-content: center;
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
  animation-name: slideLeft;
  @keyframes slideLeft {
    from {
      transform: translateX(-1000px);
    }
    to {
      transform: translateX(0px);
    }
  }
  @media screen and (max-width: 480px) {
    background-color: green;
  }
`;

export const ProfileImgBox = styled.img`
  width: 315px;
  height: 315px;
  margin: 20px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px double gray;
  box-shadow: 0 0 6px;
  transition: 0.2s linear;
  :hover {
    box-shadow: 0 0 10px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 480px) {
    width: 150px;
    height: 150px;
    margin: 20px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px double gray;
    box-shadow: 0 0 6px;
    transition: 0.2s linear;
  }
`;
export const profileinfo = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  margin: 0 5px;
  input {
    height: 45px;
    font-size: 15px;
    border: 0;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    background-color: #d9d9d9;
  }
  /* textarea {
    width: 170px;
    height: 80px;
    resize: none;
    overflow: hidden;
    font-size: 15px;
    border: 0;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    background-color: #d9d9d9;
  } */
`;
export const nickName = styled.div`
  top: 80px;
  position: absolute;
  width: 230px;
  height: 40px;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
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
`;

export const introduce = styled.div`
  position: absolute;
  top: 160px;
`;
export const textName = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 5px;
`;
export const selfBox = styled.input`
  resize: none;
  overflow: hidden;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  height: 60px;
  outline: none;
  padding-left: 10px;
  background-color: #d9d9d9;
`;

export const snsLink = styled.div`
  position: absolute;
  top: 290px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;
export const snsIcon = styled.img`
  width: 30px;
  margin: 5px;
`;

export const buttonGroup = styled.div`
  bottom: 60px;
  position: absolute;
  width: 120px;
  height: 48px;

  border: 2px solid gray;
  border-radius: 10px;
  button {
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: gray;
    transition: 0.2s linear;
  }
  button:hover {
    color: black;
    transition: 0.2s linear;
  }
`;

export const detailPickInfo = styled.div`
  /* width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  grid-template-rows: repeat(2, minmax(100px, 50%)); */
`;
export const detailPickInfoTotal = styled.div``;
export const detailPickInfoCategory = styled.div`
  background-color: #73e4bc;
  width: 135px;
  height: 135px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
