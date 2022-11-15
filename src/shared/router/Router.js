import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/mainPage/MainPage";
import BoardWrite from "../../pages/BoardWrite";
import MyPage from "../../pages/mypage/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardWrite />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
