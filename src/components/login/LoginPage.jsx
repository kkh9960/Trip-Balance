import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Signup from "./Signup";
import * as t from "./Loginstyle";
import instance from "../../lib/instance";
import useInput from "../../hooks/useInput";
import kakao from "../../img/kakaologin.jpg";
import { KAKAO_AUTH_URL } from "./AuthKakao";
import Exit from "../../img/exit.svg";
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

  const [email, setEmail, emailchange] = useInput("");
  const [password, setPassword, pwchange] = useInput("");
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
      if (res.data.statusCode == 0) {
        sessionStorage.setItem("email", res.data.data.email);
        sessionStorage.setItem("nickName", res.data.data.nickName);
        localStorage.setItem(
          "refreshToken",
          res.request.getResponseHeader("refresh-token")
        );
        localStorage.setItem(
          "token",
          res.request.getResponseHeader("authorization")
        );
        alert("로그인완료!");
        window.location.reload();
      } else if (res.data.statusCode == 110) {
        alert("해당하는이메일이없습니다");
      } else if (res.data.statusCode == 111) {
        alert("비밀번호가틀렷습니다");
      }
    });
  };
  return (
    <t.Wrap>
      {/* <Header /> */}
      {modal ? (
        <t.AuthWrapper>
          <t.Formtag onSubmit={onvaled}>
            <t.CancelBtn className="cancel" onClick={modalClose}>
              <t.Exit src={Exit} />
            </t.CancelBtn>

            <t.LoginTitleWrap style={{ textAlign: "center" }}>
              <t.LoginTitle>로그인</t.LoginTitle>
            </t.LoginTitleWrap>
            <t.InputWrite
              value={email}
              name="email"
              className="input"
              type="email"
              placeholder=" 이메일을 입력해주세요 ."
              onChange={emailchange}
            />
            {errors.email && <p>이메일은 필수 항목입니다.</p>}
            <t.InputWrite
              value={password}
              name="password"
              type="password"
              className="input"
              placeholder=" 비밀번호를 입력해주세요 ."
              onChange={pwchange}
            />
            {errors.password && errors.password.type === "required" && (
              <t.Danger> 비밀번호는 필수 항목입니다.</t.Danger>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <t.Danger>비밀번호는 6자 이상이어야 합니다</t.Danger>
            )}
            {errorFromSubmit && <p>{errorFromSubmit}</p>}
            <t.LoginBtn>로그인</t.LoginBtn>
            <t.Line></t.Line>

            <t.SignUpbtn
              className="signup"
              style={{ color: "gray", textDecoration: "none" }}
              onClick={() => {
                setModal(!modal);
              }}
            >
              회원가입
            </t.SignUpbtn>
            <t.KakaoWrap href={KAKAO_AUTH_URL}>
              <t.KakaoImg src={kakao} className="kakaoimg" />
            </t.KakaoWrap>
          </t.Formtag>
        </t.AuthWrapper>
      ) : (
        <Signup />
      )}
      {/* <Footer /> */}
    </t.Wrap>
  );
}
export default LoginPage;
