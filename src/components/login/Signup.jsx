import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMemberThunk } from "../../redux/modules/Signup";
import { motion } from "framer-motion";
import LoginPage from "./LoginPage";
import instance from "../../lib/instance";
import useInput from "../../hooks/useInput";
import * as t from "./Signupstyle";
import Exit from "../../img/exit.svg";
import Back from "../../img/back.svg";
function RegisterPage() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [modal, setModal] = useState(false);
  const [checkError, setCheckError] = useState("");
  const [checkMsg, setCheckMsg] = useState("");
  const [dpNameCheck, setDpNameCheck] = useState(false);
  const [EmailCheckError, setEmailCheckError] = useState("");
  const [EmailCheckMsg, setEmailCheckMsg] = useState("");
  const [bimilcheck, setBimilcheck] = useState("문자혹은숫자6~12글자");
  const [loading, setLoading] = useState(false);
  const [bimil, setBimil, bimilchange] = useInput("");
  const [pwcheck, setpwCheck, pwcheckChange] = useInput("");
  const dispatch = useDispatch();
  const password = useRef();
  password.current = watch("password");
  const navigate = useNavigate();
  const [email, setEmail, emailchange] = useInput("");
  const [nickname, setnickname, nicknamechange] = useInput("");
  const [checkcolor, setcheckcolor] = useState(0);
  const modalClose = () => {
    window.location.reload();
  };
  const nicknamecheck = (e) => {
    e.stopPropagation();
    instance.post("tb/signup/nicknamecheck", nick).then((res) => {
      if (nickname.trim() === "") {
        alert("닉네임을입력해주세요!");
        return;
      }
      if (res.data.statusCode == 0) {
        setCheckError(<div size={30} />);
        setCheckMsg("사용가능한닉네임입니다");
        setDpNameCheck(true);
      } else {
        setCheckMsg("이미 다른 사용자가 사용 중 입니다.");
        setDpNameCheck(false);
      }
    });
  };
  const idCheck = (e) => {
    e.stopPropagation();
    instance.post("tb/signup/idcheck", LoginValue).then((res) => {
      if (res.data.statusCode == 0) {
        setEmailCheckError(<div size={30} />);
        setEmailCheckMsg("사용가능한이메일입니다");
      }
      if (email.trim() === "") {
        alert("이메일을입력해주세요!");
        return;
      }
      if (res.data.statusCode == 117) {
        setEmailCheckMsg("중복된이메일입니다!");
        return;
      }
    });
  };
  const LoginValue = {
    email: email,
  };
  const nick = {
    nickName: nickname,
  };
  const onSubmitEvery = async (data) => {
    setLoading(true);
    if (email.trim() === "") {
      alert("이메일을입력해주세요!");
      return;
    }
    await dispatch(
      addMemberThunk({
        email: LoginValue.email,
        nickName: nickname,
        pw: data.password,
        pwConfirm: data.password_confirm,
      })
    ).then((res) => {
      if (res.payload.statusCode == 117) {
        alert("중복된이메일이있습니다!");
        return;
      }
      if (res.payload.statusCode === 118) {
        alert("중복된닉네임이있습니다!");
        return;
      }
      if (email.trim() === "") {
        alert("이메일을입력하세요");
        return;
      }
      if (nickname.search(/\s/) != -1) {
        alert("닉네임은 빈칸을포함할수없습니다");
        return;
      }
      if (nickname.search(/\s/) != -1) {
        alert("이메일은 빈칸을포함할수없습니다");
        return;
      }
      if (nickname.trim() === "") {
        alert("닉네임을입력하세요");
        return;
      }
      setLoading(false);
      alert("회원가입완료!");
      window.location.reload();
    });
  };
  const Reg = /^[A-Za-z0-9]{6,12}$/;
  useEffect(() => {
    if (bimil == "") {
      setBimilcheck("문자 혹은 숫자 6~12글자");
      setcheckcolor(0);
    } else {
      if (Reg.test(bimil)) {
        setBimilcheck("올바른 비밀번호입니다");
        setcheckcolor(2);
      } else {
        setBimilcheck("조건에 맞지 않습니다");
        setcheckcolor(1);
      }
    }
  }, [bimil]);

  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <t.Wrap>
        {modal ? (
          <LoginPage />
        ) : (
          <t.SignupWrapper>
            <t.FormTag onSubmit={handleSubmit(onSubmitEvery)}>
              <t.BackArrow
                className="backArrow"
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <t.Back src={Back} />
              </t.BackArrow>
              <t.Cancel onClick={modalClose}>
                <t.Exit src={Exit} />
              </t.Cancel>
              <t.SignupTitleWrap>
                <t.SignUpTitle>회원가입</t.SignUpTitle>
              </t.SignupTitleWrap>
              <t.InputWrite
                name="email"
                type="email"
                value={email}
                onChange={emailchange}
                placeholder=" 이메일을 입력해주세요 ."
              />
              <t.EmailCheck onClick={idCheck} button type="button">
                중복확인
              </t.EmailCheck>
              <t.Emailmsg>{EmailCheckMsg}</t.Emailmsg>
              <t.InputWrite
                name="name"
                placeholder=" 닉네임 ."
                onChange={nicknamechange}
                value={nickname}
              />
              <t.NickNameCheck onClick={nicknamecheck} button type="button">
                중복확인
              </t.NickNameCheck>
              <t.Checkwrap>{checkError}</t.Checkwrap>
              <t.Nicknamemsg>{checkMsg}</t.Nicknamemsg>
              <t.InputWrite
                placeholder="문자 혹은 숫자를 사용한 6~12글자"
                name="password"
                type="password"
                value={bimil}
                onChange={bimilchange}
              />
              {checkcolor == 0 ? <t.Danger>{bimilcheck}</t.Danger> : null}
              {checkcolor == 1 ? <t.Danger2>{bimilcheck}</t.Danger2> : null}
              {checkcolor == 2 ? <t.Danger3>{bimilcheck}</t.Danger3> : null}

              <t.InputWrite
                placeholder=" 비밀번호를 확인"
                name="password_confirm"
                type="password"
                value={pwcheck}
                onChange={pwcheckChange}
              />

              <t.SignUpBtn>회원가입</t.SignUpBtn>
            </t.FormTag>
          </t.SignupWrapper>
        )}
      </t.Wrap>
    </motion.div>
  );
}
export default RegisterPage;
