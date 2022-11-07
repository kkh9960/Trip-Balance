import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Modal } from "bootstrap";
import { useDispatch } from "react-redux";
import { addMemberThunk } from "../redux/modules/Signup";
import "./login.css";
import Layout from "../component/Layout";
function RegisterPage() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const password = useRef();
  password.current = watch("password");
  console.log(watch());
  const onSubmit = (data) => {
    dispatch(
      addMemberThunk({
        email: data.email,
        name: data.name,
        password: data.password,
        password_confirm: data.password_confirm,
      })
    );
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: "center" }}>
          <h3>회원가입 해주세요~</h3>
        </div>
        <label>이메일</label>
        <input
          name="email"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>이메일형식이아닙니다</p>}

        <label>이름</label>
        <input
          name="name"
          type="text"
          {...register("name", { required: true, maxLength: 10 })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>이름 필드는 필수 항목입니다.</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>입력이 최대 길이를 초과합니다.</p>
        )}

        <label>비밀번호</label>
        <input
          name="password"
          type="password"
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /[~!@#$%^&*()_+|<>?:{}]/,
          })}
        />
        {errors.password && <p>특수문자를포함해주세요</p>}

        {errors.password && errors.password.type === "minLength" && (
          <p>비밀번호는 6자 이상이어야 합니다</p>
        )}

        <label>비밀번호확인</label>
        <input
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

        <input type="submit" disabled={loading} />
        <Link style={{ color: "gray", textDecoration: "none" }} to="/login">
          이미 아이디가 있다면...{" "}
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
