import React, { useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMemberThunk } from "../../redux/modules/Signup";
import { motion } from "framer-motion";
import LoginPage from "./LoginPage";
import instance from "../../lib/instance";
import useInput from "../../hooks/useInput";
import * as t from "./Signupstyle";
import Exit from "../../img/exit.svg"
import Back from "../../img/back.svg"
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
  const [dpEmailCheck, setDpEmailCheck] = useState(false);

  const dispatch = useDispatch();
  const password = useRef();
  password.current = watch("password");
  const navigate = useNavigate();
  const [email, setEmail, emailchange] = useInput("");
  const [nickname, setnickname, nicknamechange] = useInput("");
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
      if (res.payload.statusCode == 118) {
        alert("중복된닉네임이있습니다!");
        return;
      }
      alert("회원가입완료!");
     window.location.reload();
    });
  };
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
                <t.Back src={Back}/>

              </t.BackArrow>
              <t.Cancel onClick={modalClose}>
                <t.Exit src={Exit}/>
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
              <t.EmailCheck onClick={idCheck} button type="button">중복확인</t.EmailCheck>

              <t.EmailCheckError>{EmailCheckError}</t.EmailCheckError>
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
                placeholder=" 비밀번호를입력하세요 ."
                name="password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                 
                })}
              />

              {errors.password && errors.password.type === "minLength" && (
                <t.Danger>비밀번호는 8자 이상이어야 합니다</t.Danger>
              )}
              <t.InputWrite
                placeholder=" 비밀번호를확인하세요."
                name="password_confirm"
                type="password"
                {...register("password_confirm", {
                  required: true,
                  validate: (value) => value === password.current,
                })}
              />
              {errors.password_confirm &&
                errors.password_confirm.type === "required" && (
                  <t.Danger>비밀번호를입력하세요</t.Danger>
                )}
              {errors.password_confirm &&
                errors.password_confirm.type === "validate" && (
                  <t.Danger>암호가 일치하지 않습니다</t.Danger>
                )}
              {errorFromSubmit && <p>{errorFromSubmit}</p>}
              <t.Line></t.Line>
              <t.SignUpBtn>회원가입</t.SignUpBtn>
            </t.FormTag>
          </t.SignupWrapper>
        )}
      </t.Wrap>
    </motion.div>
  );
}
export default RegisterPage;
