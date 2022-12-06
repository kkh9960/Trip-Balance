import React, { useEffect, useState } from "react";
import * as t from "./HeaderStyle";
import mainlogo from "../../img/mainlogo.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import instance from "../../lib/instance";
import LoginPage from "../../components/login/LoginPage";
import mainlist from "../../img/mainlist.webp";
import maingame from "../../img/maingame.webp";
import mainpost from "../../img/mainpost.webp";
import mainmypage from "../../img/mainmypage.webp";
import mainlogin from "../../img/mainlogin.webp";
import mainlogout from "../../img/mainlogout.webp";
import mainservey from "../../img/mainservey.webp";

const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const nickname = sessionStorage.getItem("nickName");
  const [header, setHeader] = useState("/");
  const location = useLocation();
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
        navigate("/")
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
    <>
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
              ></t.toggleBtn>
              <t.WriteWrap toggle={toggle}>
                <t.survey>
                  <t.surveyLink href="https://forms.gle/TzPZQZzDxfgvzfkr8" target="_blank">
                  <img src={mainservey} alt="maingservey" />
                  <p>설문조사</p>
                  </t.surveyLink>
                </t.survey>
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
              <t.WriteWrap toggle={toggle}>
                <t.survey>
                  <t.surveyLink href="https://forms.gle/TzPZQZzDxfgvzfkr8" target="_blank">
                  <img src={mainservey} alt="maingservey" />
                  <p>설문조사</p>
                  </t.surveyLink>
                </t.survey>
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
    </>
  );
};

export default Header;
