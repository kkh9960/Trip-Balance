import React, { useEffect } from "react";
import Layout from "./Layout";
import TripImage from "../img/trip.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import instance from "../lib/instance";
import * as t from "./HeaderStyle";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname === "/");

  const [cookie, setCookie, removeCookie] = useCookies();
  const nickname = localStorage.getItem("nickName");
  // console.log(`지금 accessToken: ${accessToken}`);
  // console.log(`지금 refreshToken: ${refreshToken}`);
  async function logout() {
    // 백으로부터 받은 응답
    //ss
    // axios.defaults.headers.post["authorization"] = cookie.Access;
    // axios.defaults.headers.post["refresh-token"] = cookie.Refresh;

    instance
      .post("/tb/logout")
      .then((res) => {
        localStorage.removeItem("nickName");
        removeCookie("token");
        removeCookie("refreshToken");
        console.log(res);
        console.log(cookie);
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
      {location.pathname === "/" ? (
        <t.Container>
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
              <t.Trip>추천여행지</t.Trip>
              <t.Mypage
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                마이페이지
              </t.Mypage>
              {nickname ? (
                <div>
                  <div>
                    <t.Logout onClick={logout}>로그아웃</t.Logout>
                  </div>
                  <div>
                    <t.Nickname>{nickname}</t.Nickname>
                  </div>
                </div>
              ) : (
                <t.Login
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그인
                </t.Login>
              )}
            </t.WriteWrap>
          </Layout>
        </t.Container>
      ) : (
        <t.ContainerWhite>
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
              <t.Trip>추천여행지</t.Trip>
              <t.Mypage
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                마이페이지
              </t.Mypage>
              {nickname ? (
                <div>
                  <div>
                    <t.Logout onClick={logout}>로그아웃</t.Logout>
                  </div>
                  <div>
                    <t.Nickname>{nickname}</t.Nickname>
                  </div>
                </div>
              ) : (
                <t.Login
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그인
                </t.Login>
              )}
            </t.WriteWrap>
          </Layout>
        </t.ContainerWhite>
      )}
    </>
  );
};

export default Header;
