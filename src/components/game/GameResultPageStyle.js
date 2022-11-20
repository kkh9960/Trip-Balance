import styled from "styled-components";

export const localImg = styled.img`
  width: 90%;
  margin-left: 5%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  background-color: green;
`;

export const localText = styled.div`
  position: relative;
  width: 500px;
  text-align: center;
  color: white;
  font-size: 5.2em;
  text-shadow: 3px 3px 3px #000;
  bottom: 310px;
`;

export const hotelImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const bigName = styled.div`
  font-size: xx-large;
  font-weight: 500;
  margin-left: 100px;
  margin-bottom: 20px;
`;

export const hotelWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const hotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const hotelName = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
`;
