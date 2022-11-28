import React, { useEffect } from "react";
import "./PostBestfive.css";
import { useNavigate } from "react-router-dom";

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

  const goPost = (id) => {
    navigator(`/detail/${id}`);
  };

  return (
    <main>
      <div className="wrapper">
        <ul className="items">
          {best &&
            best.map((item, idx) => (
              <li
                className="item"
                key={idx}
                onClick={() => {
                  goPost(item.postId);
                }}
              >
                <div className="itemimgbox">
                  <img className="itemimg" src={item.img} />
                </div>
                <div className="textbox">
                  <div className="heartcount">{item.heartNum}</div>
                  <img className="heart" src="img/heart.svg" />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default PostBestfive;
