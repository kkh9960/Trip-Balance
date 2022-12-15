import styled from "styled-components";

export const Itemsmobile = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Itemmobile = styled.div`
  margin-right: 30px;
  width: 244px;
  height: 244px;
  transition: all 0.3s;
  border-bottom: 1px solid #ccc;
`;

export const Titlebox = styled.div`
  display: flex;
  justify-content: center;
`;

export const BestfiveTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 2rem;
`;

export const Textbox = styled.div`
  width: 344px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
  @media screen and (max-width: 480px) {
    width: 244px;
    height: 70px;
  }
`;

export const Heart = styled.img`
  width: 30px;
  height: 30px;
`;

export const HeartCount = styled.div`
  font-size: 20px;
`;

export const ItemImgBox = styled.div`
  width: 344px;
  height: 274px;
  border-radius: 20px;
  @media screen and (max-width: 480px) {
    width: 244px;
    height: 174px;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 100%;
  object-fit: cover;
`;

export const Items = styled.div`
  position: absolute;
  top: -200%;
  right: 36.15%;
  box-sizing: border-box;
  width: 400px;
  height: 1440px;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: 0;
  transform: rotate(-90deg);
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Item = styled.div`
  margin-bottom: 50px;
  width: 344px;
  height: 344px;
  transition: all 0.3s;
  border-bottom: 1px solid #ccc;
  transform: rotate(90deg);
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 244px;
    height: 244px;
  }
`;

export const Wrap = styled.div``;

export const Main = styled.main`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 0;
  margin-top: 50px;
  @media screen and (max-width: 480px) {
    max-width: 98%;
  }
`;
