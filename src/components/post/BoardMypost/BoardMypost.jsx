import React, { useEffect } from "react";
import * as St from "./BoardMypostStyle";
import { useParams } from "react-router-dom";
import { useState } from "react";

const BoardMypost = ({ post, mypost }) => {
  const [filter, setfilter] = useState([]);

  const params = useParams();

  const anotherpost = filter.length;

  useEffect(() => {
    setfilter(
      mypost.filter((item) => {
        return item.postId != params.id;
      })
    );
  }, [mypost]);

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
      <St.MyPostWrap>
        {anotherpost != 0 && (
          <St.MyPostTitle>{post?.author}님의 다른글</St.MyPostTitle>
        )}
        <St.PostItemWarp className="wrapper">
          <St.Itembox className="items">
            {filter &&
              filter.map((item, idx) => (
                <St.Item
                  className="item"
                  key={idx}
                  onClick={() => {
                    goPost(item.postId);
                  }}
                >
                  <St.ItemImgBox className="itemimgbox">
                    <St.ItemImg className="itemimg" src={item.img} alt="" />
                  </St.ItemImgBox>
                  <St.Textbox className="textbox">
                    <h2>{item.title}</h2>
                    <span>{item.local}</span>
                  </St.Textbox>
                </St.Item>
              ))}
          </St.Itembox>
        </St.PostItemWarp>
      </St.MyPostWrap>
      {anotherpost != 0 && (
        <St.MyPostTitlemobile>{post?.author}님의 다른글</St.MyPostTitlemobile>
      )}
      <St.PostCardList>
        {filter &&
          filter.map((item, idx) => (
            <St.CardWrap
              key={idx}
              onClick={() => {
                goPost(item.postId);
              }}
            >
              <St.CardImgbox>
                <St.CardImg src={item.img} alt="" />
              </St.CardImgbox>
              <St.CardTextbox>
                <St.CardTitle>{item.title}</St.CardTitle>
              </St.CardTextbox>
            </St.CardWrap>
          ))}
      </St.PostCardList>
    </>
  );
};

export default BoardMypost;
