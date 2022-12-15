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
  width: 440px;
  height: 650px;
  bottom: 70px;
  background-color: white;
  margin: 0 auto;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  top: 60px;
  @media screen and (max-width: 746px) {
    top: 10px;
    height: 600px;
    width: 270px;
  }
`;
export const CancelBtn = styled.div`
  position: relative;
  left: 400px;
  top:10px;
  cursor: pointer;
  width: 24px;
  height: 50px;
  @media screen and (max-width: 746px) {
    left: 300px;
  }
`;
export const Exit = styled.img`
width: 30px;
@media screen and (max-width: 746px) {
  position: relative;
  left: -50px;
}
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
  @media screen and (max-width: 746px) {
    width: 300px;
    left: -15px;
  }
`;
export const Danger = styled.p`
  color: #bf1650;
  before {
    display: inline;
    content: ":경고: ";
  }
`;
export const LoginBtn = styled.button`
font-size: 17px;
  width: 360px;
  height: 61px;
  left: 40px;
  top: 100px;
  position: relative;
  background: #00c1ec;
  border-radius: 10px;
  color: white;
  border: none;
  @media screen and (max-width: 746px) {
    width: 300px;
    left: -10px;
  }
`;
export const Line = styled.div`
  width: 354px;
  border: 1px solid rgba(170, 170, 170, 0.7);
  position: relative;
  left: 40px;
  top: 110px;
  @media screen and (max-width: 746px) {
    left: -10px;
    width: 300px;
  }
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
  left: 40px;
  top: 70px;

  @media screen and (max-width: 746px) {
    left: -40px;
  }
`;
export const KakaoImg = styled.img`
  width: 360px;
  height: 61px;
  position: relative;
  top: 20px;
  right: 21px;
  @media screen and (max-width: 746px) {
    width: 300px;
    left: 10px;
  }
`;
export const SignUpbtn = styled.div`
  position: relative;
  text-align: center;
  top: 220px;
  font-size: 24px;
  cursor: pointer;
`;
