import React, { useEffect, useState } from "react";
import * as t from "./HeaderStyle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import instance from "../../lib/instance";
import LoginPage from "../../components/login/LoginPage";
import mainlogo from "../../img/mainlogo.webp";
import mainlist from "../../img/mainlistW.webp";
const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const nickname = sessionStorage.getItem("nickName");
  const [header, setHeader] = useState("/");
  const location = useLocation();
  // const mainlogo = "../";
  // const mainlist = "../../img/mainImg/mainlistW.webp";
  const maingame = "../../img/mainImg/maingameW.webp";
  const mainpost = "../../img/mainImg/mainpostW.webp";
  const mainmypage = "../../img/mainImg/mainmypageW.webp";
  const mainlogin = "../../img/mainImg/mainloginW.webp";
  const mainlogout = "../../img/mainImg/mainlogoutW.webp";
  const mainservey = "../../img/mainImg/mainserveyW.webp";
  const maincancel = "../../img/mainImg/mainCancelButtonW.webp";

  useEffect(() => {
    setHeader(location.pathname);
  }, [location]);
  const email = sessionStorage.getItem("email");
  async function logout() {
    instance
      .post("/tb/logout")
      .then((res) => {
        sessionStorage.removeItem("nickName");
        sessionStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        alert("로그아웃완료!");
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        alert("잠시만기다려주세요~");
        window.location.reload();
      });
  }
  const [toggle, setToggle] = useState(true);
  const toggleChange = () => {
    return toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <t.BannerSection>
      {header === "/" ? (
        <t.Container1>
          {modal ? (
            <LoginPage />
          ) : (
            <>
              <t.LogoBox>
                <Link to="/">
                  <t.Logo src={mainlogo} alt="logo" />
                </Link>
              </t.LogoBox>
              <t.toggleBtn
                src={mainlist}
                alt="listicon"
                toggle={toggle}
                onClick={toggleChange}
              />
              <t.toggleCancelBtn
                src={maincancel}
                alt="cancelicon"
                toggle={toggle}
                onClick={toggleChange}
              />
              <t.WriteWrap toggle={toggle}>
                <t.Game
                  onClick={() => {
                    navigate("/start");
                  }}
                >
                  <img src={maingame} alt="maingameimg" />
                  <p>밸런스게임</p>
                </t.Game>

                <t.Posting
                  onClick={() => {
                    navigate("/post");
                  }}
                >
                  <img src={mainpost} alt="mainpostimg" />
                  <p>게시판</p>
                </t.Posting>

                {email == null ? (
                  <t.Mypage
                    onClick={() => {
                      alert("로그인을 해주세요!");
                      setModal(!modal);
                    }}
                  >
                    <img src={mainmypage} alt="mainmypageimg" />
                    <p>마이페이지</p>
                  </t.Mypage>
                ) : (
                  <t.Mypage
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    <img src={mainmypage} alt="mainmypageimg" />
                    <p>마이페이지</p>
                  </t.Mypage>
                )}
                {nickname ? (
                  <t.Logout onClick={logout}>
                    <img src={mainlogout} alt="mainlogoutimg" />
                    <p>로그아웃</p>
                  </t.Logout>
                ) : (
                  <t.Login
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    <img src={mainlogin} alt="mainloginimg" />
                    <p>로그인</p>
                  </t.Login>
                )}
              </t.WriteWrap>
            </>
          )}
        </t.Container1>
      ) : (
        <t.Container2>
          {modal ? (
            <LoginPage />
          ) : (
            <>
              <t.LogoBox>
                <Link to="/">
                  <t.Logo src={mainlogo} alt="logo" />
                </Link>
              </t.LogoBox>
              <t.toggleBtn
                src={mainlist}
                alt="listicon"
                toggle={toggle}
                onClick={toggleChange}
              />
              <t.toggleCancelBtn
                src={maincancel}
                alt="cancelicon"
                toggle={toggle}
                onClick={toggleChange}
              />
              <t.WriteWrap toggle={toggle}>
                <t.Game
                  onClick={() => {
                    navigate("/start");
                  }}
                >
                  <img src={maingame} alt="maingameimg" />
                  <p>밸런스게임</p>
                </t.Game>
                <t.Posting
                  onClick={() => {
                    navigate("/post");
                  }}
                >
                  <img src={mainpost} alt="mainpostimg" />
                  <p>게시판</p>
                </t.Posting>

                {email == null ? (
                  <t.Mypage
                    onClick={() => {
                      alert("로그인을 해주세요!");
                      setModal(!modal);
                    }}
                  >
                    <img src={mainmypage} alt="mainmypageimg" />
                    <p>마이페이지</p>
                  </t.Mypage>
                ) : (
                  <t.Mypage
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    <img src={mainmypage} alt="mainmypageimg" />
                    <p>마이페이지</p>
                  </t.Mypage>
                )}
                {nickname ? (
                  <t.Logout onClick={logout}>
                    <img src={mainlogout} alt="mainlogoutimg" />
                    <p>로그아웃</p>
                  </t.Logout>
                ) : (
                  <t.Login
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    <img src={mainlogin} alt="mainloginimg" />
                    <p>로그인</p>
                  </t.Login>
                )}
              </t.WriteWrap>
            </>
          )}
        </t.Container2>
      )}
    </t.BannerSection>
  );
};

export default Header;
