import styled from "styled-components";

export const blogSection = styled.div`
  @media screen and (min-width: 480px) {
    max-width: 100%;
    min-width: 100px;
    height: 996px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 500px;
  }
`;
export const blogContainer = styled.div`
  width: 1325px;
  height: 885px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 450px;
  }
`;
export const blogList = styled.div`
  @media screen and (min-width: 480px) {
    width: 1320px;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 400px;
    display: flex;
    overflow: auto;
    white-space: nowrap;
    text-align: center;
  }
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
  margin-bottom: 20px;
`;
export const blogListBox = styled.div`
  background-color: #f2f2f2;
  @media screen and (min-width: 480px) {
    background-color: gray;
    display: flex;
    width: 630px;
    height: 185px;
    border-radius: 20px 0px 0px 20px;
    margin: 5px;
  }
  @media screen and (max-width: 480px) {
    width: 315px;
    height: 375px;
    border-radius: 20px 20px 20px 20px;
    margin: 5px;
  }
`;
export const blogImgBox = styled.img`
  @media screen and (min-width: 480px) {
    width: 285px;
    height: 185px;
    object-fit: cover;
    border-radius: 20px 0px 0 20px;
  }

  @media screen and (max-width: 480px) {
    width: 315px;
    height: 230px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    margin-bottom: 5px;
  }
`;
export const blogContentsBox = styled.div`
  width: 355px;
  overflow: hidden;
  @media screen and (min-width: 480px) {
    width: 355px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;
export const blogTitle = styled.div`
  @media screen and (min-width: 480px) {
    text-align: left;
    display: inline-block;
    width: 355px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: bold;
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
export const blogContents = styled.div``;
export const blogName = styled.div`
  @media screen and (min-width: 480px) {
    width: 300px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: gray;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: gray;
    margin-bottom: 5px;
  }
`;
