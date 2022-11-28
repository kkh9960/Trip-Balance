import React, { useEffect, useState } from "react";
import * as t from "./HeaderStyle";
import Layout from "./Layout";
import TripImage from "../../img/trip.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import instance from "../../lib/instance";
import LoginPage from "../login/LoginPage";

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

  return (
    <>
      {header === "/" ? (
        <t.Container1>
          {modal ? (
            <LoginPage />
          ) : (
            <Layout>
              <t.WriteWrap>
                <Link to="/">
                  <t.Logo
                    src={TripImage}
                    onClick={() => {
                      navigate("/post");
                    }}
                  />
                </Link>

                <t.Posting
                  onClick={() => {
                    navigate("/post");
                  }}
                >
                  게시판
                </t.Posting>

                {email == null ? (
                  <t.Mypage
                    onClick={() => {
                      alert("로그인을 해주세요!");
                    }}
                  >
                    마이페이지
                  </t.Mypage>
                ) : (
                  <t.Mypage
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    마이페이지
                  </t.Mypage>
                )}
                {nickname ? (
                  <div>
                    <div>
                      <t.Logout onClick={logout}>로그아웃</t.Logout>
                    </div>
                  </div>
                ) : (
                  <t.Login
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    로그인
                  </t.Login>
                )}
              </t.WriteWrap>
            </Layout>
          )}
        </t.Container1>
      ) : (
        <t.Container2>
          {modal ? (
            <LoginPage />
          ) : (
            <Layout>
              <t.WriteWrap>
                <Link to="/">
                  <t.Logo
                    src={TripImage}
                    onClick={() => {
                      navigate("/post");
                    }}
                  />
                </Link>

                <t.Posting
                  onClick={() => {
                    navigate("/post");
                  }}
                >
                  게시판
                </t.Posting>

                {email == null ? (
                  <t.Mypage
                    onClick={() => {
                      alert("로그인을 해주세요!");
                      setModal(!modal);
                    }}
                  >
                    마이페이지
                  </t.Mypage>
                ) : (
                  <t.Mypage
                    onClick={() => {
                      navigate("/mypage");
                    }}
                  >
                    마이페이지
                  </t.Mypage>
                )}
                {nickname ? (
                  <div>
                    <div>
                      <t.Logout onClick={logout}>로그아웃</t.Logout>
                    </div>
                  </div>
                ) : (
                  <t.Login
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    로그인
                  </t.Login>
                )}
              </t.WriteWrap>
            </Layout>
          )}
        </t.Container2>
      )}
    </>
  );
};

export default Header;
