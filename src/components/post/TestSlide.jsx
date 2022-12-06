import React, { useEffect, useState } from "react";
import { useHref, useNavigate } from "react-router-dom";
import "./Test.css";
import UseInterval from "../../hooks/useinterval";
import { gsap } from "gsap";

import { Link, Navigate, useNavigate } from "react-router-dom";


const TestSlide = () => {
  const navigator = useNavigate();
  const [currentIndex, setIndex] = useState(0);
  const [mobileIndex, setImobilendex] = useState(0);
  const banner = document.querySelectorAll(".banner");
  const Img1 = "img/default3.jpg";
  const Img2 = "img/default5.jpg";
  const Img3 = "img/default6.jpg";
  const Img4 = "img/default6.jpg";

  const navigate = useNavigate();
  const SlideAuto = () => {
    const banner = document.querySelectorAll(".banner");

    let nextIndex = (currentIndex + 1) % 4;

    banner[currentIndex].style.opacity = "0";
    banner[nextIndex].style.opacity = "1";

    banner.forEach((banner) => {
      banner.style.transition = "all 0.5s";
    });

    setIndex((prevstate) => (prevstate + 1) % 4);
  };

  const mobileSlideAuto = () => {
    const banner = document.querySelectorAll(".banner2");

    let nextIndex = (mobileIndex + 1) % 3;

    banner[mobileIndex].style.opacity = "0";
    banner[nextIndex].style.opacity = "1";

    banner.forEach((banner) => {
      banner.style.transition = "all 0.5s";
    });

    setImobilendex((prevstate) => (prevstate + 1) % 3);
  };

  //앞으로가기
  function func() {
    let nextIndex = (currentIndex + 1) % 3; // 0 1 2 0 무한루프

    banner[currentIndex].style.opacity = "0"; //첫 번째 이미지를 안보이게
    banner[nextIndex].style.opacity = "1"; //두 번째 이미지를 보이게

    banner.forEach((banner) => {
      banner.style.transition = "all 0.5s"; //자연스레 바뀌는 효과
    });

    currentIndex = nextIndex; // 함수가 한번 실행될때마다 넥스트값을 커렌트값에 옮겨준다.
  }

  //뒤로가기
  function funct() {
    let nextIndex = currentIndex == 0 ? 2 : currentIndex - 1;

    banner[currentIndex].style.opacity = "0";
    banner[nextIndex].style.opacity = "1";

    banner.forEach((banner) => {
      banner.style.transition = "all 0.5s";
    });

    currentIndex = nextIndex;
  }

  UseInterval(() => {
    SlideAuto();
  }, 5500);

  UseInterval(() => {
    mobileSlideAuto();
  }, 3000);

  useEffect(() => {
    if (matchMedia("screen and (max-width: 480px)").matches) {
      switch (currentIndex) {
        case 0:
          gsap.to(".mainboard_title", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1,
          });
          gsap.to(".mainboard_titleshadow", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.2,
          });
          gsap.to(".mainboard_body", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.4,
          });
          gsap.to(".mainboard_btn", {
            duration: 1,
            y: 0,
            x: 0,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_img", {
            duration: 1,
            y: 140,
            x: -20,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_imgshadow", {
            duration: 1,
            y: 130,
            x: -10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_title4", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_titleshadow4", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_body4", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_btn4", {
            opacity: 0,
            x: 0,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_img4", {
            opacity: 0,
            y: 110,
            x: -20,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_imgshadow4", {
            opacity: 0,
            y: -100,
            x: -10,
            delay: 0,
            duration: 0,
          });
          break;
        case 1:
          gsap.to(".mainboard_title2", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1,
          });
          gsap.to(".mainboard_titleshadow2", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.2,
          });
          gsap.to(".mainboard_body2", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.4,
          });
          gsap.to(".mainboard_btn2", {
            duration: 1,
            y: 10,
            x: 0,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_img2", {
            duration: 1,
            y: 170,
            x: -15,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_imgshadow2", {
            duration: 1,
            y: 190,
            x: -5,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_title", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_titleshadow", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_body", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_btn", {
            opacity: 0,
            width: "150px",
            x: 0,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_img", {
            opacity: 0,
            y: -50,
            x: -120,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_imgshadow", {
            opacity: 0,
            y: -40,
            x: -110,
            delay: 0,
            duration: 0,
          });
          break;
        case 2:
          gsap.to(".mainboard_title3", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1,
          });
          gsap.to(".mainboard_titleshadow3", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.2,
          });
          gsap.to(".mainboard_body3", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.4,
          });
          gsap.to(".mainboard_btn3", {
            duration: 1,
            y: -30,
            x: -10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_img3", {
            duration: 1,
            y: 145,
            x: -20,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_imgshadow3", {
            duration: 1,
            y: 180,
            x: -10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_title2", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_titleshadow2", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_body2", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_btn2", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_img2", {
            opacity: 0,
            y: -10,
            x: -20,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_imgshadow2", {
            opacity: 0,
            y: -20,
            x: -30,
            delay: 0,
            duration: 0,
          });
          break;
        case 3:
          gsap.to(".mainboard_title4", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1,
          });
          gsap.to(".mainboard_titleshadow4", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.2,
          });
          gsap.to(".mainboard_body4", {
            duration: 1,
            y: 100,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.4,
          });
          gsap.to(".mainboard_btn4", {
            duration: 1,
            y: 0,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_img4", {
            duration: 1,
            y: 160,
            x: -20,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_imgshadow4", {
            duration: 1,
            y: 180,
            x: -10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_title3", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_titleshadow3", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_body3", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_btn3", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_img3", {
            opacity: 0,
            y: -100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_imgshadow3", {
            opacity: 0,
            y: 100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          break;
        default:
      }
    } else {
      switch (currentIndex) {
        case 0:
          gsap.to(".mainboard_title", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1,
          });
          gsap.to(".mainboard_titleshadow", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.2,
          });
          gsap.to(".mainboard_body", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.4,
          });
          gsap.to(".mainboard_btn", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_img", {
            duration: 1,
            y: 200,
            x: 200,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_imgshadow", {
            duration: 1,
            y: 0,
            x: 210,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_title4", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_titleshadow4", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_body4", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_btn4", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_img4", {
            opacity: 0,
            y: -100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_imgshadow4", {
            opacity: 0,
            y: 100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          break;
        case 1:
          gsap.to(".mainboard_title2", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1,
          });
          gsap.to(".mainboard_titleshadow2", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.2,
          });
          gsap.to(".mainboard_body2", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.4,
          });
          gsap.to(".mainboard_btn2", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_img2", {
            duration: 1,
            y: 200,
            x: 200,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_imgshadow2", {
            duration: 1,
            y: 0,
            x: 200,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_title", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_titleshadow", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_body", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_btn", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_img", {
            opacity: 0,
            y: -100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_imgshadow", {
            opacity: 0,
            y: 100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          break;
        case 2:
          gsap.to(".mainboard_title3", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1,
          });
          gsap.to(".mainboard_titleshadow3", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.2,
          });
          gsap.to(".mainboard_body3", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.4,
          });
          gsap.to(".mainboard_btn3", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_img3", {
            duration: 1,
            y: 300,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_imgshadow3", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_title2", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_titleshadow2", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_body2", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_btn2", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_img2", {
            opacity: 0,
            y: -100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_imgshadow2", {
            opacity: 0,
            y: 100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          break;
        case 3:
          gsap.to(".mainboard_title4", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1,
          });
          gsap.to(".mainboard_titleshadow4", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.2,
          });
          gsap.to(".mainboard_body4", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.4,
          });
          gsap.to(".mainboard_btn4", {
            duration: 1,
            y: 0,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_img4", {
            duration: 1,
            y: 300,
            x: 100,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_imgshadow4", {
            duration: 1,
            y: 100,
            x: 150,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_title3", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_titleshadow3", {
            duration: 0,
            opacity: 0,
            x: -100,
            delay: 0,
          });
          gsap.to(".mainboard_body3", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_btn3", {
            opacity: 0,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_img3", {
            opacity: 0,
            y: -100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          gsap.to(".mainboard_imgshadow3", {
            opacity: 0,
            y: 100,
            x: -100,
            delay: 0,
            duration: 0,
          });
          break;
        default:
      }
    }
    if (currentIndex) {
    }
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <main className="main">
      <section id="banner_wrap">
        <div className="banner_inner">
          <div className="banner">
            <div className="one">
              <div className="main_board">
                <div>
                  <div className="mainboard_title">
                    Trip
                    <br /> Balance
                  </div>
                  <div className="mainboard_titleshadow">트립 밸런스</div>
                  <div className="mainboard_body"></div>
                  {/* <button
                    className="mainboard_btn"
                  >
                  </button> */}
                </div>
                <div className="mainboard_imgbox">
                  <div className="mainboard_img">
                    <img src={Img1} alt="" />

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="banner">
            <div className="two">
              <div className="main_board">
                <div>
                  <div className="mainboard_title2">밸런스 게임</div>
                  <div className="mainboard_titleshadow2">Balance game</div>
                  <div className="mainboard_body2">
                    여행지를 골라주는
                    <br /> 밸런스 게임을 즐겨보세요
                  </div>
                  {/* <button
                    className="mainboard_btn2"
                    onClick={() => console.log()}
                  >
                    GameStart
                  </button> */}

                </div>
              </div>
            </div>
            <div className="banner">
              <div className="three">
                <div className="main_board">
                  <div>
                    <div className="mainboard_title3">밸런스 게임</div>
                    <div className="mainboard_titleshadow3">Balance game</div>
                    <div className="mainboard_body3">
                      당신에게 맞는 여행지는 어디인가요?
                      <br />
                      밸런스 게임을 통해서 당신의 여행지를 찾아보세요.
                    </div>
                    {/* <button className="mainboard_btn3" onClick={gogame}>
                    게시판 가기
                  </button> */}
                  </div>
                  <div className="mainboard_imgbox3">
                    <div className="mainboard_img3">
                      <img src={Img2} alt="" />
                    </div>
                    <div className="mainboard_imgshadow3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner">
            <div className="three">
              <div className="main_board">
                <div>
                  <div className="mainboard_title3">이벤트</div>
                  <div className="mainboard_titleshadow3">
                    설문에 참여하면
                    <br /> 상품이 와르르!
                  </div>
                  <div className="mainboard_body3">
                    이벤트에 참여하고
                    <br /> 기프티콘 받아가세요~
                  </div>
                  {/* <button className="mainboard_btn3">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScZE6aTPE3qjPm9L6Y_r09bzjjtKVSCL_sWz77fHzqHShsq6g/viewform">
                      응모하러가기
                    </a>
                  </button> */}

                </div>
              </div>
            </div>
            <div className="banner2">
              <div
                className="two2"
                style={{
                  background: "url(/img/banner2.webp)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="main_board2">
                  <div>
                    <div className="mainboard_title5">여행지 후기 게시판</div>
                    {/* <div className="mainboard_titleshadow5">
                      Popular tourist destinations
                    </div> */}
                    <div className="mainboard_body5">우리들의 여행 이야기</div>
                    {/* <button className="mainboard_btn5">게시판 가기</button> */}
                  </div>
                  <div className="mainboard_imgbox5">
                    <div className="mainboard_img5">
                      <img src={Img3} alt="" />
                    </div>
                    <div className="mainboard_imgshadow5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner2">
              <div
                className="three2"
                style={{
                  background: "url(/img/banner3.webp)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="main_board2">
                  <div>
                    <div className="mainboard_title6">밸런스 게임</div>
                    {/* <div className="mainboard_titleshadow6">Balance game</div> */}
                    <div className="mainboard_body6">
                      당신에게 맞는 여행지는 어디인가요?
                      <br />
                      밸런스 게임을 통해서 당신의 여행지를 찾아보세요.
                    </div>
                    {/* <button className="mainboard_btn6" onClick={gogame}>
                    게시판 가기
                  </button> */}
                  </div>
                  <div className="mainboard_imgbox6">
                    <div className="mainboard_img6">
                      <img src={Img2} alt="" />
                    </div>
                    <div className="mainboard_imgshadow6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="four">
              <div className="main_board">
                <div>
                  <div className="mainboard_title4">게시판</div>
                  <div className="mainboard_titleshadow4">
                    가장 핫한 우리
                    <br /> 여행 이야기
                  </div>
                  <div className="mainboard_body4">
                    당신의 이야기를 들려주세요
                  </div>
                  {/* <button
                    className="mainboard_btn4"
                    onClick={() => navigate("/post")}
                  >
                    게시판 가기
                  </button> */}
                </div>
                <div className="mainboard_imgbox4">
                  <div className="mainboard_img4">
                    <img src={Img4} alt="" />
                  </div>
                  <div className="mainboard_imgshadow4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
};

export default TestSlide;
