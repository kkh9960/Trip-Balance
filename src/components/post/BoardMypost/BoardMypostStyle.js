import styled from "styled-components";

export const CardTitle = styled.div`
  margin: 20px 20px 5px 20px;
  font-size: 18px;
  white-space: normal;
  @media screen and (max-width: 480px) {
    margin: 5px;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    width: 140px;
    text-overflow: ellipsis;
  }
`;

export const CardTextbox = styled.div`
  width: 100%;
  height: 135px;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 50px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CardImgbox = styled.div`
  width: 100%;
  height: 365px;
  border-radius: 20px;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 200px;
  }
`;

export const CardWrap = styled.div`
  width: 344px;
  height: 500px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 480px) {
    width: 95%;
    height: 250px;
  }
`;

export const PostCardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  display: none;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 30px auto 100px;
    width: 95%;
  }
`;

export const MyPostTitlemobile = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
    text-align: center;
    font-size: 25px;
    margin-top: 60px;
  }
`;

export const MyPostWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  margin-top: 50px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MyPostTitle = styled.h1`
  margin-bottom: 50px;
  text-align: center;
`;

export const PostItemWarp = styled.div`
  position: relative;
  &::before,
  &::after {
    position: absolute;
    top: 0;
    z-index: 1;
    content: "";
    display: block;
    width: 20px;
    height: 100%;
  }
`;

export const Itembox = styled.ul`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0;
  cursor: pointer;
  &.active {
    cursor: grab;
  }
`;

export const Item = styled.li`
  display: inline-block;
  margin-left: 20px;
  width: 350px;
  height: 500px;
`;

export const ItemImgBox = styled.div`
  width: 350px;
  height: 370px;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Textbox = styled.div`
  width: 350px;
  height: 130px;
  h2 {
    white-space: normal;
    width: 100%;
    font-size: 20px;
    margin-left: 10px;
  }
  span {
    font-size: 18px;
    margin-left: 10px;
  }
`;
