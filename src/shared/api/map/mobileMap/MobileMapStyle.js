import styled from "styled-components";

export const mobileMapSection = styled.div`
  @media screen and (min-width: 481px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 719px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const mobileMapImg = styled.img`
  width: 99%;
  @media screen and (max-width: 480px) {
    width: 99%;
    height: 550px;
    border: 1px solid black;
    margin: 0 auto 20px;
  }
`;

export const mobileMapBtnGroup = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 11px;
  }
`;
export const locationButton = styled.div`
  @media screen and (max-width: 480px) {
    /* font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #777;
    width: 120px;
    height: 72px;
    border: 2px solid #777;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center; */
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #777;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    font-weight: 600;
    transition: 0.25s;
    color: #777;
    :hover {
      background-color: #a3a1a1;
      color: #e3dede;
      border: 3px solid #a3a1a1;
      color: #6e6e6e;
    }
  }
`;
