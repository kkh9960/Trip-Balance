import React, { useEffect, useState } from "react";
import * as t from "./HeaderStyle";
import Layout from "./Layout";
import mainlogo from "../../img/mainlogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import instance from "../../lib/instance";
import LoginPage from "../../components/login/LoginPage";
import { SlMenu, SlLogin, SlLogout } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies();
  const nickname = sessionStorage.getItem("nickName");
  const [header, setHeader] = useState("/");
  const location = useLocation();
  // console.log(`지금 accessToken: ${accessToken}`);
  // console.log(`지금 refreshToken: ${refreshToken}`);
  useEffect(() => {
    setHeader(location.pathname);
  }, [location]);
  const email = sessionStorage.getItem("email");
  async function logout() {
    // 백으로부터 받은 응답
    //ss
    // axios.defaults.headers.post["authorization"] = cookie.Access;
    // axios.defaults.headers.post["refresh-token"] = cookie.Refresh;

    instance
      .post("/tb/logout")
      .then((res) => {
        sessionStorage.removeItem("nickName");
        sessionStorage.removeItem("email");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        alert("로그아웃완료!");
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
              <Link to="/">
                <t.Logo src={mainlogo} alt="logo" />
              </Link>
              <t.toggleBtn toggle={toggle} onClick={toggleChange}>
                <SlMenu />
              </t.toggleBtn>
              <t.WriteWrap toggle={toggle}>
                <t.Game
                  onClick={() => {
                    navigate("/start");
                  }}
                >
                  <MdOutlineVideogameAsset className="icon" />
                  <p>밸런스게임</p>
                </t.Game>

                <t.Posting
                  onClick={() => {
                    navigate("/post");
                  }}
                >
                  <HiClipboardDocumentList className="icon" />

                  <p>게시판</p>
                </t.Posting>

                {email == null ? (
                  <t.Mypage
                    onClick={() => {
                      alert("로그인을 해주세요!");
                      setModal(!modal);
                    }}
                  >
                    <FaUserCircle className="icon" />

                    <p>마이페이지</p>
                  </t.Mypage>
                ) : (
                  <t.Mypage
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    <FaUserCircle className="icon" />

                    <p>마이페이지</p>
                  </t.Mypage>
                )}
                {nickname ? (
                  <t.Logout onClick={logout}>
                    <SlLogout className="icon" />

                    <p>로그아웃</p>
                  </t.Logout>
                ) : (
                  <t.Login
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    <SlLogin className="icon" />

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
              <Link to="/">
                <t.Logo src={mainlogo} alt="logo" />
              </Link>
              <t.toggleBtn toggle={toggle} onClick={toggleChange}>
                <SlMenu />
              </t.toggleBtn>
              <t.WriteWrap toggle={toggle}>
                <t.Game
                  onClick={() => {
                    navigate("/start");
                  }}
                >
                  <MdOutlineVideogameAsset className="icon" />
                  <p>밸런스게임</p>
                </t.Game>
                <t.Posting
                  onClick={() => {
                    navigate("/post");
                  }}
                >
                  <HiClipboardDocumentList className="icon" />

                  <p>게시판</p>
                </t.Posting>

                {email == null ? (
                  <t.Mypage
                    onClick={() => {
                      alert("로그인을 해주세요!");
                      setModal(!modal);
                    }}
                  >
                    <FaUserCircle className="icon" />

                    <p>마이페이지</p>
                  </t.Mypage>
                ) : (
                  <t.Mypage
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    <FaUserCircle className="icon" />

                    <p>마이페이지</p>
                  </t.Mypage>
                )}
                {nickname ? (
                  <t.Logout onClick={logout}>
                    <SlLogout className="icon" />

                    <p>로그아웃</p>
                  </t.Logout>
                ) : (
                  <t.Login
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    <SlLogin className="icon" />

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
