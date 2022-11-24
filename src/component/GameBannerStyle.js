import styled from "styled-components";

export const GameBanner = styled.div`
  background-color: black;
  width: 100%;
  height: 300px;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    font-size: 40px;
    transition: 0.5s;
  }
`;
