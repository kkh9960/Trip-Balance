import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Signup from "./Signup";
import "./login.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
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

  //  axios
  //    .post("https://bkyungkeem.shop/api/member/login", loginInfo)
  //    .then((res) => {
  //      if (res.data.success) {
  //        console.log(res.data.data.emailId);
  //        setCookie("Access", res.request.getResponseHeader("authorization"), {
  //          path: "/",
  //        });
  //        setCookie("Refresh", res.request.getResponseHeader("refresh-token"), {
  //          path: "/",
  //        });
  //        localStorage.setItem("emailId", res.data.data.emailId);
  //        navigate("/");
  //      } else {
  //        setErrorMsg(res.data.error.message);
  //      }
  //    });

  return (
    <div>
      {modal ? (
        <Signup />
      ) : (
        <div>
          {/* <Header /> */}
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
              <Link
                style={{ color: "gray", textDecoration: "none" }}
                onClick={() => {
                  setModal(!modal);
                }}
              >
                아직 아이디가 없다면...
              </Link>
            </form>
          </div>
          {/* <Footer /> */}
        </div>
      )}
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
