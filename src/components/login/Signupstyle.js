import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const Checkwrap = styled.div`
  position: relative;
  left: 400px;
  bottom: 10px;
`;
export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  top: 3px;
  left: 0px;
  z-index: 2;
`;
export const Exit = styled.img`
width: 20px;
`;
export const Back = styled.img`
  width: 20px;
`;
export const Nicknamemsg = styled.div`
  font-style: NotoSansKR;
  font-size: 17px;
  position: relative;
  top: -120px;
  left: 45px;
  color: green;
  @media screen and (max-width: 746px) {
    top: -130px;
    left: 5px;
  }
`;
export const FormTag = styled.form`
  padding: 30px;
  width: 430px;
  height: 650px;
  margin: auto;
  background-color: white;
  bottom: -30px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  @media screen and (max-width: 746px) {
    top: 10px;
    height: 600px;
    width: 300px;
  }
`;
export const BackArrow = styled.div`
  position: relative;
  top: 30px;
`;
export const Cancel = styled.div`
  position: relative;
  left: 400px;
   top:-10px;
  @media screen and (max-width: 746px) {
    top:0px;
    left: 280px;
  }
`;
export const SignupTitleWrap = styled.div``;
export const SignUpTitle = styled.div`
  width: 200px;
  height: 60px;
  margin: 64.7px 127.5px 32px 135.5px;
  font-style: NotoSansKR;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #555;
  position: relative;
  left: -25px;
  top: -100px;
  @media screen and (max-width: 746px) {
    top: -90px;

    left: -80px;
    font-size: 25px;
  }
`;
export const EmailCheckError = styled.div`
  position: relative;
  left: 100px;
  bottom: 20px;
  @media screen and (max-width: 746px) {
  }
`;
export const InputWrite = styled.input`
  display: block;
  box-sizing: border-box;
  width: 360px;
  height: 61px;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 10px;
  border: solid 2px rgba(170, 170, 170, 0.8);
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  position: relative;
  top: -100px;
  @media screen and (max-width: 746px) {
    width: 300px;
    top: -110px;
    right: 0px;
  }
`;
export const Danger = styled.p`
  color: block;
  font-style: NotoSansKR;
  font-size: 17px;
  color:gray;
  opacity: 0.8;
  font-weight: 100px;
  position: relative;
  top: -98px;
  left: 47px;
  before {
   font-style: NotoSansKR;
    display: inline;
    content: ":경고: ";
  }
  @media screen and (max-width: 746px) {
    top: -110px;
    left: 7px;
  }
`;
export const Danger2 = styled.p`
 font-style: NotoSansKR;
 font-size: 17px;
  color: red;
  position: relative;
  top: -100px;
  left: 47px;
  before {
    color: red;
    display: inline;
    content: ":경고: ";
  }
  @media screen and (max-width: 746px) {
    top: -110px;
    left: 8px;
  }
`;
export const Danger3 = styled.p`
  color: green;
  font-size: 17px;
  position: relative;
  top: -100px;
  left: 45px;
  before {
    color: green;
    display: inline;
    content: ":경고: ";
  }
  @media screen and (max-width: 746px) {
    top: -110px;
    left: 10px;
  }
`;

// export const Danger3 = styled.p`
//   color: green;
//   position: relative;
//   top: 70px;
//   left: 85px;
//   before {
//     color: green;
//     display: inline;
//     content: ":경고: ";
//   }
//   @media screen and (max-width: 746px) {
//     top: -100px;
//     left: 0px;
//   }
// `;

export const Line = styled.div`
  width: 354px;
  border: 1px solid rgba(170, 170, 170, 0.7);
  position: relative;
  left: 80px;
  top: 60px;
  @media screen and (max-width: 746px) {
    top: -60px;
    left: 20px;
    width: 250px;
  }
`;
export const Emailmsg = styled.div`
font-style: NotoSansKR;
font-size: 17px;
  position: relative;
  left: 45px;
  bottom: 120px;
  color: green;
  @media screen and (max-width: 746px) {
    top: -130px;
    left: 8px;
  }
`;
export const SignUpBtn = styled.button`
  background: #00c1ec;
  color: white;
  text-transform: uppercase;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  border: none;
  top: -80px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  width: 360px;
  height: 61px;
  border-radius: 10px;
  position: relative;
  left: 35px;
  transition: 1.1s;
  @media screen and (max-width: 746px) {
    top: -113px;
    left: 45px;
    width: 200px;
  }
`;
export const EmailCheck = styled.button`
  width: 100px;
  height: 30px;
  position: relative;
  bottom: 155px;
  left: 289px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  @media screen and (max-width: 746px) {
    position: relative;
    left: 220px;
    top: -165px;
    width: 70px;
  }
`;
export const NickNameCheck = styled.button`

  width: 100px;
  height: 30px;
  left: 289px;
  bottom: 155px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  border-radius: 10px;
  @media screen and (max-width: 746px) {
    position: relative;
    left: 220px;
    top: -165px;
    width: 70px;
  }
`;
