import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostBestfive = ({ best }) => {
  const navigator = useNavigate();
  const email = sessionStorage.getItem("email");
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
    if (email) {
      navigator(`/detail/${id}`);
    } else {
      alert("게시글 조회는 로그인 후 가능합니다.");
    }
  };

  console.log(best);

  return (
    <Main>
      <Wrap>
        <Items className="items">
          {best &&
            best.map((item, idx) => (
              <Item
                className="item"
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
      </Wrap>
    </Main>
  );
};

export default PostBestfive;

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

const Items = styled.ul`
  padding: 0;
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0;
  cursor: pointer;
`;

const Wrap = styled.div`
  position: relative;
  &:before,
  &:after {
    position: absolute;
    top: 0;
    z-index: 1;
    content: "";
    display: block;
    width: 20px;
    height: 100%;
  }
`;

const Main = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 0;
  margin-top: 50px;
  @media screen and (max-width: 480px) {
  }
`;

const Item = styled.li`
  list-style: none;
  display: inline-block;
  margin-left: 20px;
  width: 344px;
  height: 344px;
  transition: all 0.3s;
  border-bottom: 1px solid #ccc;
  &:hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 480px) {
    width: 244px;
    height: 244px;
  }
`;
