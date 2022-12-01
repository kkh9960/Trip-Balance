import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMemberThunk } from "../../redux/modules/Signup";
import { FcCheckmark } from "react-icons/fc";
import { motion } from "framer-motion";
import Header from "../common/Header";
import LoginPage from "./LoginPage";
import instance from "../../lib/instance";
import useInput from "../../hooks/useInput";
import { ImExit } from "react-icons/im";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import * as t from "./Signupstyle";
function RegisterPage() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [modal, setModal] = useState(false);
  const [dpNameCheck, setDpNameCheck] = useState(false);
  const [checkError, setCheckError] = useState("");
  const dispatch = useDispatch();
  const password = useRef();
  password.current = watch("password");
  const navigate = useNavigate();
  const [email, setEmail, emailchange] = useInput("");
  const [nickname, setnickname, nicknamechange] = useInput("");
  const modalClose = () => {
    window.location.reload();
  };
  const nicknamecheck = () => {
    instance.post("tb/signup/nicknamecheck", nick).then((res) => {
      if (nickname.trim() === "") {
        alert("닉네임을입력해주세요!");
        return;
      }
      if (res.data.statusCode == 0) {
        setCheckError(<FcCheckmark size={30} />);
        setDpNameCheck(true);
      }
      if (res.data.statusCode == 118) {
        setCheckError("이미 다른 사용자가 사용 중 입니다.");
        return;
      }
    });
  };
  const idCheck = () => {
    console.log(typeof LoginValue);
    instance.post("tb/signup/idcheck", LoginValue).then((res) => {
      console.log(res);
      if (email.trim() === "") {
        alert("이메일을입력해주세요!");
        return;
      }
      if (res.data.statusCode == 117) {
        alert("중복된이메일이잇습니다");
        return;
      }
      if (res.data.statusCode == 0) {
        alert("가입가능한이메일입니다");
      }
    });
  };
  const LoginValue = {
    email: email,
  };
  const nick = {
    nickName: nickname,
  };
  const onSubmit = async (data) => {
    if (email.trim() === "") {
      alert("이메일을입력해주세요!");
      return;
    }
    console.log({
      email: LoginValue.email,
      nickName: nickname,
      pw: data.password,
      pwConfirm: data.password_confirm,
    });
    await dispatch(
      addMemberThunk({
        email: LoginValue.email,
        nickName: nickname,
        pw: data.password,
        pwConfirm: data.password_confirm,
      })
    ).then((res) => {
      console.log(res);
      if (res.payload.statusCode == 117) {
        console.log(res);
        alert("중복된이메일이있습니다!");
        return;
      }
      if (res.payload.statusCode == 118) {
        console.log(res);
        alert("중복된닉네임이있습니다!");
        return;
      }
      alert("회원가입완료!");
      navigate("/");
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
            <t.FormTag onSubmit={handleSubmit(onSubmit)}>
              <t.BackArrow
                className="backArrow"
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <BsFillArrowLeftCircleFill size={30} />
              </t.BackArrow>
              <t.Cancel onClick={modalClose}>
                <ImExit size={30} />
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
              {errors.email && <p>이메일형식이아닙니다</p>}
              <t.InputWrite
                name="name"
                placeholder=" 닉네임 ."
                onChange={nicknamechange}
                value={nickname}
              />
              <t.Checkwrap>{checkError}</t.Checkwrap>
              <t.InputWrite
                placeholder=" 비밀번호를입력하세요 ."
                name="password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern: /[~!@#$%^&*()_+|<>?:{}]/,
                })}
              />
              {errors.password && <p>특수문자를포함해주세요</p>}
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
              {/* <Link style={{ color: "gray", textDecoration: "none" }}>
              이미 아이디가 있다면...{" "}
            </Link> */}
            </t.FormTag>
            <t.EmailCheck onClick={idCheck}>중복확인</t.EmailCheck>
            <t.NickNameCheck onClick={nicknamecheck}>중복확인</t.NickNameCheck>
          </t.SignupWrapper>
        )}
      </t.Wrap>
    </motion.div>
  );
}
export default RegisterPage;