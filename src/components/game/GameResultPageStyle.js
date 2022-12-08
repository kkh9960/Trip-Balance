import styled from "styled-components";

export const top = styled.div`
  padding-top: 120px;
  width: 100vw;
  height: 100vw;
  @media screen and (max-width: 746px) {
    width: 100%;
  }
`;

export const localImgBox = styled.div`
  margin: 0 auto;
  width: 1903px;
  height: 504.21px;
  display: flex;
  margin: 0 auto 0 auto;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 746px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    //left: 0;
  }
`;

export const localResultBox = styled.div`
  width: 1903px;
  margin: 0 auto 0 auto;
  @media screen and (max-width: 746px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    //left: 0;
  }
`;
export const resultImgBox = styled.div`
  width: 1326px;
  height: 463.93px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 120px auto 10px auto;
  @media screen and (max-width: 746px) {
    width: 100%;
    margin: 0;
    text-overflow: ellipsis;
  }
`;

export const localImg = styled.img`
  width: 1307.65px;
  height: 504.21px;
  object-fit: cover;
  border-radius: 20px;
  background-color: gray;
  @media screen and (max-width: 746px) {
    position: relative;
    width: 100%;
    left: 0px;
  }
`;

export const localText = styled.div`
  font-family: "Jalnan";
  width: 500px;
  color: white;
  font-size: 4.2em;
  text-shadow: 3px 3px 3px #000;
  position: absolute;
  bottom: 50%;
  left: 18%;
  @media screen and (max-width: 746px) {
    width: 90%;
    left: 10px;
    font-family: "Jalnan";
  }
`;

export const localTextContent = styled.div`
  font-family: "Jalnan";
  width: 500px;
  color: white;
  font-size: x-large;
  text-shadow: 3px 3px 3px #000;
  position: absolute;
  bottom: 35%;
  left: 18%;
  @media screen and (max-width: 746px) {
    font-family: "Jalnan";
    width: 90%;
    left: 20px;
  }
`;

export const hotelImg = styled.img`
  width: 316.52px;
  height: 330.42px;
  object-fit: cover;
  border-radius: 20px;
  @media screen and (max-width: 746px) {
    margin: 10px;
  }
`;

export const bigName = styled.div`
  width: 252.62px;
  height: 43.93px;
  font-family: "Jalnan";

  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #333333;
  margin: 0 auto 40px auto;
  @media screen and (max-width: 746px) {
    font-family: "Jalnan";
    font-size: 30px;
    position: relative;
    left: -90px;
    top: 30px;
  }
`;
export const blogName = styled.div`
  font-family: "Jalnan";
  width: 252.62px;
  height: 43.93px;
  position: relative;
  //font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #333333;
  margin: 0 auto 40px auto;
  @media screen and (max-width: 746px) {
    font-family: "Jalnan";
    width: 100%;
    bottom: -30px;
    left: -80px;
    font-size: 30px;
  }
`;

export const hotelWrap = styled.div`
  flex-direction: row;
  width: 1326px;
  justify-content: space-between;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 746px) {
    width: 100%;
    position: relative;
    //left: 10px;
    overflow: auto;
    white-space: nowrap;
  }
`;

export const hotelInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 746px) {
    width: 100%;
  }
`;

export const hotelName = styled.div`
  width: 183.72px;
  height: 28.96px;
  font-family: "Jalnan";
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  @media screen and (max-width: 746px) {
    width: 300px;

    font-family: "Jalnan";
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    left: 15px;
    bottom: 7px;
  }
`;
