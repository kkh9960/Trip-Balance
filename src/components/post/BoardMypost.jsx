import React, { useEffect } from "react";
import "./BoardMypost.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardMypost = ({ post, mypost }) => {
  const navigator = useNavigate();
  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;

    const slider = document.querySelector(".items");

    const end = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const start = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const move = (e) => {
      if (!isDown) return;

      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      const dist = x - startX;
      slider.scrollLeft = scrollLeft - dist;
    };

    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);

    slider.addEventListener("mousemove", move);
    slider.addEventListener("touchmove", move);

    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);
  }, []);

  const goPost = (id) => {
    window.location.replace(`/detail/${id}`);
  };

  return (
    <>
      <MyPostWrap>
        <MyPostTitle>{post?.author}님의 다른글</MyPostTitle>
        <PostItemWarp className="wrapper">
          <Itembox className="items">
            {mypost &&
              mypost.map((item, idx) => (
                <Item
                  className="item"
                  key={idx}
                  onClick={() => {
                    goPost(item.postId);
                  }}
                >
                  <ItemImgBox className="itemimgbox">
                    <ItemImg className="itemimg" src={item.img} alt="" />
                  </ItemImgBox>
                  <Textbox className="textbox">
                    <h2>{item.title}</h2>
                    <span>{item.local}</span>
                  </Textbox>
                </Item>
              ))}
          </Itembox>
        </PostItemWarp>
      </MyPostWrap>
      <MyPostTitlemobile>{post?.author}님의 다른글</MyPostTitlemobile>
      <PostCardList>
        {mypost &&
          mypost.map((item, idx) => (
            <CardWrap
              key={idx}
              onClick={() => {
                goPost(item.postId);
              }}
            >
              <CardImgbox>
                <CardImg src={item.img} />
              </CardImgbox>
              <CardTextbox>
                <CardTitle>{item.title}</CardTitle>
              </CardTextbox>
            </CardWrap>
          ))}
      </PostCardList>
    </>
  );
};

export default BoardMypost;

const CardTitle = styled.div`
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

const CardTextbox = styled.div`
  width: 100%;
  height: 135px;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 50px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const CardImgbox = styled.div`
  width: 100%;
  height: 365px;
  border-radius: 20px;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 200px;
  }
`;

const CardWrap = styled.div`
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

const PostCardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 30px auto 100px;
    width: 95%;
  }
`;

const MyPostTitlemobile = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
    text-align: center;
    font-size: 25px;
    margin-top: 60px;
  }
`;

const MyPostWrap = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
    margin-top: 50px;
  }
`;

const MyPostTitle = styled.h1`
  margin-bottom: 50px;
  text-align: center;
`;

const PostItemWarp = styled.div`
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

const Itembox = styled.ul`
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

const Item = styled.li`
  display: inline-block;
  margin-left: 20px;
  width: 350px;
  height: 500px;
`;

const ItemImgBox = styled.div`
  width: 350px;
  height: 370px;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Textbox = styled.div`
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
