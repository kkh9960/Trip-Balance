import styled from "styled-components";

export const hotelSection = styled.div`
  @media screen and (min-width: 480px) {
    max-width: 100%;
    min-width: 100px;
    height: 996px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: gray;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 570px;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const hr = styled.div`
position:absolute;
width:95%;
height:1px;
background-color:#ccc;
@media screen and (max-width: 480px) {
    display:none;
  }
`;

export const hotelContainer = styled.div`
  width: 1325px;
  height: 885px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 450px;
    margin: 0 auto 20px;
  }
`;
export const hotelText = styled.div`
  height: 44px;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  text-align: center;
  margin-bottom: 56px;
  color: #f2f2f2;
`;
export const hotelList = styled.div`
  @media screen and (min-width: 480px) {
    width: 1320px;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:space-evenly;
    position:relative;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 400px;
    display: flex;
    overflow: auto;
    white-space: nowrap;
    text-align: center;
    overflow-y:hidden;
  }
`;
export const hotelListBox = styled.div`
  width: 280px;
  height: 328px;
  border-radius: 20px;
  margin: 25px 10px 10px 10px;
  display:flex;
  flex-direction:column;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const hotelImgBox = styled.img`
  width: 280px;
  height: 282px;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 20px;
`;
export const hotelTitle = styled.div`
  width:280px;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: #f2f2f2;
  display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
