import styled from "styled-components";

export const userName = styled.div`
  width: 500px;
  font-size: 28px;
  margin: 0 0 5px 170px;
  span {
    font-size: 22px;
  }
`;
export const UserInfor = styled.div`
  display: flex;
  width: 1300px;
  margin: 0 auto;
`;

export const myInformation = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
`;
export const ProfileImgBox = styled.img`
  width: 315px;
  height: 315px;
  margin: 20px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px double gray;
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
  textarea {
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
  }
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
export const selfBox = styled.textarea`
  resize: none;
  overflow: hidden;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
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
