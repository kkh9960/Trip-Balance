import styled from "styled-components";

export const main = styled.div`
  width: 1326px;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const mainImageBox = styled.div`
  max-width: 100%;
  height: 100vh;
`;
export const mapGroup = styled.div`
  width: 1326px;
  height: 630;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
