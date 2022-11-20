import styled from "styled-components";

export const myInformation = styled.div`
  position: relative;
  width: 80%;
  height: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid gray;
`;
export const ProfileImgBox = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px double gray;
`;
export const profileinfo = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
`;

export const introduce = styled.div``;
export const buttonGroup = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;

  bottom: 0;
  border: 1px solid gray;
  border-radius: 10px;
`;

export const detailPickInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  grid-template-rows: repeat(2, minmax(100px, 50%));
`;
export const detailPickInfoTotal = styled.div``;
export const detailPickInfoCategory = styled.div`
  background-color: darkgray;
  width: 135px;
  height: 135px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
