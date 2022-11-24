import styled from "styled-components";

export const postContainer = styled.div`
  max-width: 1400px;
  min-width: 100px;
  height: 2000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
//호텔추천
export const hotelContainer = styled.div`
  width: 1325px;
  height: 885px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const hotelText = styled.div`
  height: 44px;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
`;
export const hotelList = styled.div`
  width: 1320px;
  display: flex;
  flex-wrap: wrap;
`;
export const hotelListBox = styled.div`
  background-color: gray;
  width: 315px;
  height: 375px;
  border-radius: 20px 20px 20px 20px;
  margin: 5px;
`;
export const hotelImgBox = styled.img`
  width: 315px;
  height: 330px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;
export const hotelTitle = styled.div`
  text-align: center;
`;
//블로그추천
export const blogContainer = styled.div`
  width: 1325px;
  height: 885px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const blogList = styled.div`
  width: 1320px;
  display: flex;
  flex-wrap: wrap;
`;
export const blogText = styled.div`
  width: 100%;
  height: 44px;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
`;
export const blogListBox = styled.div`
  background-color: gray;
  display: flex;
  width: 630px;
  height: 185px;
  border-radius: 20px 0px 0px 20px;
  margin: 5px;
`;
export const blogImgBox = styled.img`
  width: 285px;
  height: 185px;
  object-fit: cover;
  border-radius: 20px 0px 0 20px;
`;
export const blogTitle = styled.div`
  text-align: center;
`;
