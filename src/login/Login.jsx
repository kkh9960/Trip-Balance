import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "./login.css";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: "center" }}>
          <h3>로그인</h3>
        </div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>이메일은 필수 항목입니다.</p>}

        <label>Password</label>
        <input
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p> 비밀번호는 필수 항목입니다.</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>비밀번호는 6자 이상이어야 합니다</p>
        )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}

        <input type="submit" disabled={loading} />
        <Link style={{ color: "gray", textDecoration: "none" }} to="/signup">
          아직 아이디가 없다면...{" "}
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
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
