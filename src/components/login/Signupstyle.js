import styled from "styled-components";

export const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 1;
`;
export const Checkwrap = styled.div`
  position: relative;
  left: 400px;
  bottom: -10px;
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

export const Nicknamemsg = styled.div`
  position: relative;
  left: 80px;
  top: 60px;
  color: green;
`;
export const FormTag = styled.form`
  padding: 30px;
  width: 518px;
  margin: auto;
  background-color: white;
  bottom: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  position: relative;
`;

export const BackArrow = styled.div`
  position: relative;
  top: 30px;
`;

export const Cancel = styled.div`
  position: relative;
  left: 480px;
`;

export const SignupTitleWrap = styled.div``;
export const SignUpTitle = styled.div`
  width: 200px;
  height: 60px;
  margin: 64.7px 127.5px 32px 135.5px;
  font-family: ReemKufi;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #555;
  position: relative;
  left: 20px;
`;
export const EmailCheckError = styled.div`
  position: relative;
  left: 400px;
  bottom: -10px;
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
  margin-top: 20px;
  position: relative;
  top: 70px;
`;

export const Danger = styled.p`
  color: #bf1650;
  position: relative;
  top: 70px;
  left: 85px;

  before {
    color: red;
    display: inline;
    content: "⚠ ";
  }
`;

export const Line = styled.div`
  width: 354px;
  border: 1px solid rgba(170, 170, 170, 0.7);
  position: relative;
  left: 80px;
  top: 60px;
`;
export const Emailmsg = styled.div`
  position: relative;
  left: 80px;
  bottom: -40px;

  color: green;
  border: 1px solid red;
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
  margin-top: 110px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  width: 360px;
  height: 61px;
  border-radius: 10px;
  position: relative;
  left: 80px;
  transition: 1.1s;
`;

export const EmailCheck = styled.button`
  width: 100px;
  height: 30px;
  position: relative;
  left: 240px;
  bottom: 500px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

export const NickNameCheck = styled.button`
  width: 100px;
  height: 30px;
  left: 240px;
  position: relative;
  bottom: 440px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  border-radius: 10px;
`;
