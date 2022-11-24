import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMemberThunk } from "../redux/modules/Signup";
import "./signup.css";
import { motion } from "framer-motion";
import Header from "../component/Header";
import LoginPage from "./LoginPage";
import instance from "../lib/instance";
import useInput from "../hooks/useInput";
function RegisterPage() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const password = useRef();
  password.current = watch("password");
  console.log(watch());
  const navigate = useNavigate();
  const [email, setEmail, emailchange] = useInput("");
  const [nickname, setnickname, nicknamechange] = useInput("");

  const nicknamecheck = () => {
    console.log(nick);
    console.log(typeof nick);
    instance.post("tb/signup/nicknamecheck", nick).then((res) => {
      console.log(res);
      if (nickname.trim() === "") {
        alert("닉네임을입력해주세요!");
        return;
      }
      if (res.data.statusCode == 0) {
        alert("가입가능한닉네임입니다");
      }
      if (res.data.statusCode == 118) {
        alert("중복된닉네임이잇습니다");
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
      <div>
        {/* <Header /> */}
        <div className="signup-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ textAlign: "center" }}>
              <div className="title">회원가입</div>
            </div>

            <input
              name="email"
              type="email"
              value={email}
              onChange={emailchange}
              placeholder=" 이메일을 입력해주세요 ."
            />

            {errors.email && <p>이메일형식이아닙니다</p>}

            <input
              name="name"
              placeholder=" 닉네임 ."
              onChange={nicknamechange}
              value={nickname}
            />

            {errors.name && errors.name.type === "required" && (
              <p>이름 필드는 필수 항목입니다.</p>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <p>입력이 최대 길이를 초과합니다.</p>
            )}

            <input
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
              <p>비밀번호는 8자 이상이어야 합니다</p>
            )}

            <input
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
                <p>비밀번호를입력하세요</p>
              )}
            {errors.password_confirm &&
              errors.password_confirm.type === "validate" && (
                <p>암호가 일치하지 않습니다</p>
              )}

            {errorFromSubmit && <p>{errorFromSubmit}</p>}
            <div className="line2"></div>
            <button type="submit" style={{ textDecorationLine: "none" }}>
              회원가입
            </button>
            {/* <Link style={{ color: "gray", textDecoration: "none" }}>
              이미 아이디가 있다면...{" "}
            </Link> */}
          </form>
          <button onClick={idCheck} className="emailbutton">
            중복확인
          </button>
          <button onClick={nicknamecheck} className="nicknamebutton">
            중복확인
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default RegisterPage;
