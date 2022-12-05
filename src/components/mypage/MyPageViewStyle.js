import styled from "styled-components";
//common
export const userName = styled.div`
  width: 500px;
  font-size: 28px;
  margin: 0 0 5px 170px;
  span {
    font-size: 22px;
  }
`;
export const Line = styled.div`
  width: 1100px;
  height: 3px;
  margin: 0 auto 15px;
  background-color: black;
`;
export const thinLine = styled.div`
  width: 70%;
  height: 1px;
  margin: 0 auto 15px;
  background-color: black;
`;
export const textLine = styled.div`
  width: 2px;
  height: 54.6px;
  margin: 25px;
  transform: (rotate: 90deg);
  background-color: #555;
`;
export const empty = styled.div``;
export const backgroundImg = styled.div`
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const myInformationWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  background-color: transparent;
  @media screen and (max-width: 480px) {
    background-color: gray;
    flex-direction: column;
    width: 100%;
  }
`;

export const myPickPostWrap = styled.div`
  position: relative;
  width: 77%;
  height: 45%;
  margin-bottom: 40px;
  margin-right: auto;
  float: left;
  border-radius: 0 10px 10px 0;
  display: flex;
  justify-content: center;
  border: 2px solid gray;
  border-left-style: none;
  padding: 10px 20px 10px 200px;
  background-color: #fff;
  box-shadow: 0 0 6px;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 100vw;
    background-color: gray;
  }
`;
export const myPostWrap = styled.div`
  position: relative;
  width: 77%;
  height: 45%;
  margin-bottom: 40px;
  float: right;
  border-radius: 10px 0 0 10px;
  display: flex;
  background-color: #fff;
  justify-content: center;
  border: 2px solid gray;
  border-right-style: none;
  padding: 10px 200px 10px 20px;
  box-shadow: 0 0 6px;
`;
export const myTotalInfo = styled.div`
  height: 150px;

  background-color: #4cd8eb;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  text-align: center;
  color: #555;
`;

//좋아요한 게시글
export const itemHeader = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100px;
`;
export const pickPostWrap = styled.div`
  margin: 80px 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    display: flex;
  }
`;
export const pickPostItem = styled.div`
  width: 180px;
  height: 260px;
  border: 0 solid black;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
  cursor: pointer;
`;
export const pickPostImg = styled.img`
  width: 180px;
  height: 190px;
  margin: 0 0 10px;
  object-fit: cover;
`;
export const pickPostProfile = styled.img`
  float: left;
  width: 30px;
  height: 30px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  border-radius: 50%;
`;

export const pickPostNickname = styled.div``;

export const footer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
`;

export const mySelectInformation = styled.div`
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 0 30px 0;
  width: 100%;
  height: 1700px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.6) 10%,
    rgba(255, 255, 255, 0.7) 25%,
    rgba(255, 255, 255, 0.8) 35%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
