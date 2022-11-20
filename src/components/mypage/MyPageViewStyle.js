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
  width: 90%;
  height: 1px;
  margin: 0 auto 15px;
  background-color: black;
`;
export const textLine = styled.div`
  width: 2px;
  height: 54.6px;
  transform: (rotate: 90deg);
  background-color: #f2f2f2;
`;
export const myInformationWrap = styled.div`
  position: relative;
  width: 100%;
  margin-top: 30px;
`;

export const myInformationItem = styled.div`
  position: relative;
  width: 77%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid gray;
  padding: 10px 20px 10px;
`;
export const myPickInfo = styled.div`
  width: 70%;
  height: 150px;
  margin: 10px auto;
  background-color: #00c1ec;
  border-radius: 10px;
  padding: 0 71.5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  text-align: center;
  color: #f2f2f2;
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
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  grid-template-rows: repeat(2, minmax(100px, 50%));
`;
export const pickPostItem = styled.div`
  width: 180px;
  height: 260px;
  border: 0 solid black;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0 30px 0;
  width: 100%;
  height: 1500px;
`;
