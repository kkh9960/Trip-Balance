import styled from "styled-components";

export const blogSection = styled.div`
  @media screen and (min-width: 481px) {
    max-width: 100%;
    min-width: 100px;
    height: 996px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 570px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const blogContainer = styled.div`
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
  }
`;
export const blogList = styled.div`
  @media screen and (min-width: 481px) {
    width: 1320px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 400px;
    display: flex;
    overflow: auto;
    white-space: nowrap;
    overflow-y: hidden;
    text-align: center;
    position: relative;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const blogText = styled.div`
  width: 100%;
  height: 44px;
  color: #333;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: normal;
  text-align: center;
  margin-bottom: 50px;
`;
export const blogListBox = styled.div`
  @media screen and (min-width: 481px) {
    display: flex;
    width: 630px;
    height: 185px;
    border-radius: 20px 0px 0px 20px;
    margin-bottom: 60px;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    width: 315px;
    height: 375px;
    border-radius: 20px 20px 20px 20px;
    margin: 5px;
  }
`;
export const blogImgBox = styled.img`
  @media screen and (min-width: 481px) {
    width: 284.47px;
    height: 184.01px;
    object-fit: cover;
    border-radius: 20px;
    margin-right: 20px;
    box-shadow: 0 0 2px;
  }

  @media screen and (max-width: 480px) {
    width: 315px;
    height: 230px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 15px;
    box-shadow: 0 0 2px;
  }
`;
export const blogContentsBox = styled.div`
  width: 355px;
  overflow: hidden;

  @media screen and (min-width: 481px) {
    width: 355px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;
export const blogTitle = styled.div`
  @media screen and (min-width: 481px) {
    text-align: left;
    display: inline-block;
    width: 355px;
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const blogContents = styled.div`
  width: 100%;
  height: 100%;
  font-family: "NotoSansKR";
  color: #777;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const blogName = styled.div`
  @media screen and (min-width: 481px) {
    width: 300px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
  }
`;
export const hr1 = styled.div`
  position: absolute;
  width: 95%;
  height: 1px;
  top: 215px;
  background-color: #ccc;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const hr2 = styled.div`
  position: absolute;
  width: 95%;
  height: 1px;
  bottom: 275px;
  background-color: #ccc;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
