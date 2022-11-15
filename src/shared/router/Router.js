import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../login/LoginPage";
import Home from "../../Home";
import MyPage from "../../pages/mypage/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
