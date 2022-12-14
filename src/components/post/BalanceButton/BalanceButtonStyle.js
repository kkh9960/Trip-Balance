import styled from "styled-components";

export const Container = styled.div`
  background-color: #5502cf;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
export const Btnbox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-family: "NexonLv2Gothic";
  font-weight: 700;
  font-size: 50px;
  color: #ffff;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Btn = styled.button`
  background-color: #ea3d6e;
  color: #fff;
  font-size: 20px;
  margin-left: 3rem;
  padding: 5px 20px;
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Btn2 = styled.button`
  display: none;
  @media screen and (max-width: 480px) {
    background-color: #ea3d6e;
    color: #fff;
    font-size: 20px;
    display: block;
    padding: 5px 20px;
    border-radius: 10px;
  }
`;
