import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../login/LoginPage";
// import MainPage from "../../pages/mainPage/MainPage";
import MyPage from "../../pages/mypage/MyPage";
import PostPage from "../../PostPage/PostPage";
import BoardWrite from "../../pages/BoardWrite";
// import MainPage from "../../pages/mainPage/MainPage"
import Home from "../../Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/board" element={<BoardWrite />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
