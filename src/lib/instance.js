import axios from "axios";

const token = localStorage.getItem("token");
const token2 = localStorage.getItem("refreshToken");
// refresh 토큰 받아오기
axios.defaults.headers.common["Authorization"] = `${token}`;
axios.defaults.headers.common["Refresh-Token"] = `${token2}`;
// header에 토큰 받은것 담아주기 >> refresh 토큰으로 연장
const instance = axios.create({
  baseURL: "https://tbtbtb.shop/", //"https://tbtbtb.shop/",

  headers: {
    "Content-Type": "application/json",
    Authorization: `${token}`,
    "Refresh-Token": `${token2}`,
  },
});

export default instance;
