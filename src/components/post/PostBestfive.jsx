import React, { useState, useEffect } from "react";
import "./PostBestfive.css";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import LoginPage from "../login/LoginPage";


const PostBestfive = ({ best }) => {
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

  console.log(best);

  const goPost = (id) => {
    navigator(`/detail/${id}`);
  };

  const [modal, setModal] = useState(false);
  const email = sessionStorage.getItem("email");
  const goLogin = () => {
    alert("게시글 조회는 로그인 후 가능합니다.");
    setModal(!modal);
  };


  return (

    <Main>
      <Wrap>
        <Items className="items">
          {best &&
            best.map((item, idx) => (
              <Item
                className="item"
                key={idx}
                onClick={goLogin}
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
`;

const ItemImg = styled.img`
  width: 100%;
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
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 0;
  margin-top: 50px;
  h1 {
    margin-bottom: 50px;
    text-align: center;
  }
`;

const Item = styled.li`
  list-style: none;
  display: inline-block;
  margin-left: 20px;
  width: 344px;
  height: 344px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;
