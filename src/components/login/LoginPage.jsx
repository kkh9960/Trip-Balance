import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Signup from "./Signup";
import "./login.css";
import TripImage from "../../img/trip.jpg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import instance from "../../lib/instance";
import useInput from "../../hooks/useInput";
import kakao from "../../img/kakaologin.jpg";
import { ImExit } from "react-icons/im";
import { KAKAO_AUTH_URL } from "./AuthKakao";

function LoginPage() {
  const {
    setValue,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(true);
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail, emailchange] = useInput("");
  const [password, setPassword, pwchange] = useInput("");
  const [cookie, setCookie, removeCookie] = useCookies();
  const modalClose = () => {
    window.location.reload();
  };

  const onvaled = (event) => {
    event.preventDefault();
    if (email.trim() === "") {
      alert("이메일을 입력해 주세요!");
      return;
    }
    if (password.trim() === "") {
      alert("비밀번호를 입력해 주세요!");
      return;
    }
    // 이메일 비번입력안하면 알럿창
    const LoginValue = {
      email: email,
      pw: password,
    };
    // 서버로 보내줄 로그인값
    const data = instance.post("tb/login", LoginValue).then((res) => {
      // console.log(res)
      // console.log(res.data.data)
      // console.log(res.data.data.email)
      // console.log(res.data.statusMsg)
      // console.log(res.data.statusCode)

      sessionStorage.setItem("nickName", res.data.data.nickName);
      setCookie("refreshToken", res.request.getResponseHeader("refresh-token"));
      setCookie("token", res.request.getResponseHeader("authorization"));
      if (res.data.statusCode == 0) {
        sessionStorage.setItem("email", res.data.data.email);

        alert("로그인완료!");
        window.location.reload();
      } else {
        alert(res.data.statusMsg);
      }
    });
  };

  return (
    <div className="wrap">
      {/* <Header /> */}

      {modal ? (
        <div className="auth-wrapper">
          <form onSubmit={onvaled}>
            <div className="cancel" onClick={modalClose}>
              <ImExit size={30} />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1>로그인</h1>
            </div>

            <input
              value={email}
              name="email"
              type="email"
              placeholder=" 이메일을 입력해주세요 ."
              onChange={emailchange}
            />
            {errors.email && <p>이메일은 필수 항목입니다.</p>}

            <input
              value={password}
              name="password"
              type="password"
              placeholder=" 비밀번호를 입력해주세요 ."
              onChange={pwchange}
            />
            {errors.password && errors.password.type === "required" && (
              <p> 비밀번호는 필수 항목입니다.</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p>비밀번호는 6자 이상이어야 합니다</p>
            )}

            {errorFromSubmit && <p>{errorFromSubmit}</p>}

            <button type="submit" style={{ textDecorationLine: "none" }}>
              로그인
            </button>
            <div className="line"></div>
            <a className="kaka" href={KAKAO_AUTH_URL}>
              <img src={kakao} className="kakaoimg" />
            </a>
            <div
              className="signup"
              style={{ color: "gray", textDecoration: "none" }}
              onClick={() => {
                setModal(!modal);
              }}
            >
              회원가입
            </div>
          </form>
        </div>
      ) : (
        <Signup />
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default LoginPage;

const Logo = styled.img``;
// 필요할때 모달창쓰기
// import React, { useState } from "react";
// import LoginPage from "./Login";
//
// const Home = () => {
//   const [modal, setModal] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setModal(!modal);
//         }}
//       >
//         로그인창
//       </button>
//       {modal == true ? <LoginPage /> : ""}
//     </div>
//   );
// };

// export default Home;
