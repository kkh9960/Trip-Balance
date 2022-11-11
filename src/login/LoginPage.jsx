import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Signup from "./Signup";
import "./login.css";

import Footer from "../component/Footer";
import styled from "styled-components";

import { KAKAO_AUTH_URL } from "./AuthKakao";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(false);
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    try {
      setLoading(true);

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <div>
      {modal ? (
        <Signup />
      ) : (
        <div>
          {/* <Logowrap>
            <Logo>로고</Logo>
          </Logowrap> */}
          <div className="auth-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ textAlign: "center" }}>
                <h3>로그인</h3>
              </div>
              <label>Email</label>
              <input
                name="email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && <p>이메일은 필수 항목입니다.</p>}

              <label>Password</label>
              <input
                name="password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p> 비밀번호는 필수 항목입니다.</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p>비밀번호는 8자 이상이어야 합니다</p>
              )}

              {errorFromSubmit && <p>{errorFromSubmit}</p>}

              <input type="submit" disabled={loading} />

              <Link
                style={{ color: "gray", textDecoration: "none" }}
                onClick={() => {
                  setModal(!modal);
                }}
              >
                아직 아이디가 없다면...?
              </Link>
            </form>
            <>
              <a href={KAKAO_AUTH_URL}>
                <Btn>카카오로그인</Btn>
              </a>
            </>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default LoginPage;

const Btn = styled.div`
  background-image: url("/kakao_login_medium_wide.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 10px auto;
  width: 300px;
  height: 43px;
  border: none;

  /* padding: -10px; */
  color: transparent;
  border: none;
  outline: none;
`;

const Logowrap = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  top: 290px;
  position: relative;
`;

const Logo = styled.div`
  border: 1px solid red;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  width: 351px;
  height: 81px;
`;

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
