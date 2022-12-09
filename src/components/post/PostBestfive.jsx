import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostBestfive = ({ best }) => {
  const navigator = useNavigate();
  const email = sessionStorage.getItem("email");

  const goPost = (id) => {
    if (email) {
      navigator(`/detail/${id}`);
    } else {
      alert("게시글 조회는 로그인 후 가능합니다.");
    }
  };

  return (
    <>
      <Main>
        <Titlebox>
          <BestfiveTitle>인기 게시글</BestfiveTitle>
        </Titlebox>
        <Items>
          {best &&
            best.map((item, idx) => (
              <Item
                key={idx}
                onClick={() => {
                  goPost(item.postId);
                }}
              >
                <ItemImgBox>
                  <ItemImg src={item.img} />
                </ItemImgBox>
                <Textbox>
                  <HeartCount>{item.heartNum}</HeartCount>
                  <Heart src="img/heart.svg" />
                </Textbox>
              </Item>
            ))}
        </Items>
        <Itemsmobile>
          {best &&
            best.map((item, idx) => (
              <Itemmobile
                key={idx}
                onClick={() => {
                  goPost(item.postId);
                }}
              >
                <ItemImgBox>
                  <ItemImg src={item.img} />
                </ItemImgBox>
                <Textbox>
                  <HeartCount>{item.heartNum}</HeartCount>
                  <Heart src="img/heart.svg" />
                </Textbox>
              </Itemmobile>
            ))}
        </Itemsmobile>
      </Main>
    </>
  );
};

export default PostBestfive;

const Itemsmobile = styled.div`
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

const Itemmobile = styled.div`
  margin-right: 30px;
  width: 244px;
  height: 244px;
  transition: all 0.3s;
  border-bottom: 1px solid #ccc;
`;

const Titlebox = styled.div`
  display: flex;
  justify-content: center;
`;

const BestfiveTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 2rem;
`;

const Textbox = styled.div`
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

const Heart = styled.img`
  width: 30px;
  height: 30px;
`;

const HeartCount = styled.div`
  font-size: 20px;
`;

const ItemImgBox = styled.div`
  width: 344px;
  height: 274px;
  border-radius: 20px;
  @media screen and (max-width: 480px) {
    width: 244px;
    height: 174px;
  }
`;

const ItemImg = styled.img`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 100%;
  object-fit: cover;
`;

const Items = styled.div`
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

const Item = styled.div`
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

const Wrap = styled.div``;

const Main = styled.main`
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
