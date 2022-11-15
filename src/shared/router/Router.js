import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../login/LoginPage";
import Home from "../../Home";
import MyPage from "../../pages/mypage/MyPage";
import PostPage from "../../PostPage/PostPage";
import BoardWrite from "../../pages/BoardWrite";
// import MainPage from "../../pages/mainPage/MainPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/board" element={<BoardWrite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
