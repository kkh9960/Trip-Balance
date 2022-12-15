import React, { useEffect, useState } from "react";
import "./MainSlideStyle.css";
import UseInterval from "../../../hooks/useinterval";
import { gsap } from "gsap";

const MainSlide = () => {
  const Img1 = "img/mainImg/bannerImg0.webp";
  const Img3 = "img/mainImg/bannerImg3.webp";
  const Img4 = "img/mainImg/bannerImg4.png";
  const [currentIndex, setIndex] = useState(0);

  const SlideAuto = () => {
    const banner = document.querySelectorAll(".banner");

    let nextIndex = (currentIndex + 1) % 3;

    banner[currentIndex].style.opacity = "0";
    banner[nextIndex].style.opacity = "1";

    banner.forEach((banner) => {
      banner.style.transition = "all 0.5s";
    });

    setIndex((prevstate) => (prevstate + 1) % 3);
  };

  UseInterval(() => {
    SlideAuto();
  }, 4500);

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
          gsap.to(".mainboard_title4", {
            duration: 1,
            y: 50,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1,
          });
          gsap.to(".mainboard_titleshadow4", {
            duration: 1,
            y: 50,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.2,
          });
          gsap.to(".mainboard_body4", {
            duration: 1,
            y: 40,
            x: 10,
            opacity: 1,
            ease: "power1.out",
            delay: 1.4,
          });
          gsap.to(".mainboard_img4", {
            duration: 1,
            y: 45,
            x: -20,
            opacity: 1,
            ease: "power1.out",
            delay: 1.6,
          });
          gsap.to(".mainboard_imgshadow4", {
            duration: 1,
            y: 80,
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

        default:
      }
    }
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
                  <div className="mainboard_body"> </div>
                </div>
                <div className="mainboard_imgbox">
                  <div className="mainboard_img">
                    <img src={Img1} alt="" />
                  </div>
                  <div className="mainboard_imgshadow"></div>
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
                </div>
                <div className="mainboard_imgbox2">
                  <div className="mainboard_img2">
                    <img src={Img3} alt="" />
                  </div>
                  <div className="mainboard_imgshadow2"></div>
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

export default MainSlide;
