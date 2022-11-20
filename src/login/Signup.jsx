import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMemberThunk } from "../redux/modules/Signup";
import "./signup.css";
import { motion } from "framer-motion";
import Header from "../component/Header";
import LoginPage from "./LoginPage";

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
  const onSubmit = async (data) => {
    await dispatch(
      addMemberThunk({
        email: data.email,
        nickName: data.name,
        pw: data.password,
        pwConfirm: data.password_confirm,
      })
    ).then((res) => {
      console.log(res);
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
              placeholder=" 이메일을 입력해주세요 ."
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email && <p>이메일형식이아닙니다</p>}

            <input
              name="name"
              placeholder=" 닉네임 ."
              {...register("name", { required: true, maxLength: 10 })}
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
        </div>
      </div>
    </motion.div>
  );
}

export default RegisterPage;
