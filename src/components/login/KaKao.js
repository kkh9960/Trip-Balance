import { useEffect } from "react";
import instance from "../../lib/instance";

const KaKao = () => {
  //현재 윈도우 창의 주소값 불러옴
  const href = window.location.href;
  //현재 url의 파라미터를 가져옴
  let params = new URL(href).searchParams;
  //params에 저장된 파라미터 안에서 'code'의 값을 가져옴
  let code = params.get("code");

  useEffect(() => {
    if (!!code) {
      instance
        .get(`tb/oauth/kakao?code=${code}`)
        .then((res) => {
          sessionStorage.setItem("email", res.data.data.email);
          sessionStorage.setItem("nickName", res.data.data.nickName);
          localStorage.setItem("refreshToken", res.headers[`refresh-token`]);
          localStorage.setItem("token", res.headers[`authorization`]);
          window.location.replace("/");
        })
        .catch((err) => {});
    }
  }, []);

  return <div></div>;
};

export default KaKao;
