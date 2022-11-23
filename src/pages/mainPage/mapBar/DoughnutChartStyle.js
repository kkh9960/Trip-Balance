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
export const chartView = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  after {
    position: relative;
    content: "이름";
    top: -110px;
    left: 80px;
  }
`;
export const chartViewbox = styled.div`
  width: 500px;
  height: 500px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  grid-template-rows: repeat(2, minmax(100px, 50%));
`;
