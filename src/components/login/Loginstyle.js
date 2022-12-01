import styled from "styled-components";
export const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const AuthWrapper = styled.div`
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
export const Formtag = styled.form`
  padding: 30px;
  width: 518px;
  height: 726px;
  bottom: 70px;
  background-color: white;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  top: 60px;
  @media screen and (max-width: 746px) {
    width: 316px;
  }
`;
export const CancelBtn = styled.div`
  position: relative;
  left: 500px;
  cursor: pointer;
  width: 24px;
  height: 50px;
`;
export const LoginTitleWrap = styled.div``;
export const LoginTitle = styled.h1``;
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
  top: 37px;
`;
export const Danger = styled.p`
  color: #bf1650;
  before {
    display: inline;
    content: ":경고: ";
  }
`;
export const LoginBtn = styled.button`
  width: 360px;
  height: 61px;
  left: 80px;
  top: 100px;
  position: relative;
  background: #00c1ec;
  border-radius: 10px;
  color: white;
  border: none;
`;
export const Line = styled.div`
  width: 354px;
  border: 1px solid rgba(170, 170, 170, 0.7);
  position: relative;
  left: 80px;
  top: 110px;
`;
export const KakaoWrap = styled.a`
  border: none;
  outline: none;
  color: white;
  text-transform: uppercase;
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
`;
export const KakaoImg = styled.img`
  width: 360px;
  height: 61px;
  position: relative;
  top: 120px;
  right: 21px;
`;
export const SignUpbtn = styled.div`
  position: relative;
  text-align: center;
  top: 150px;
  font-size: 24px;
  cursor: pointer;
`;
