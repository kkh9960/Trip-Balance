import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../login/LoginPage";
import MainPage from "../../pages/mainPage/MainPage";
import MyPage from "../../pages/mypage/MyPage";
import PostPage from "../../PostPage/PostPage";
import BoardWrite from "../../pages/BoardWrite";
import Game from "../../pages/game/Game";
import GameResult from "../../pages/game/GameResult";
import BoardPostDetail from "../../pages/BoardPostDetail";
import BoardPostModify from "../../pages/BoardPostModify";
import Loading from "../../components/Loading/Loading";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/write" element={<BoardWrite />} />
        <Route path="/game" element={<Game />} />
        <Route path="/detail/:id" element={<BoardPostDetail />} />
        <Route path="/modify/:id" element={<BoardPostModify />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/game/:aa/:id" element={<Game />} />
        <Route path="/gameResult/:aa/:id" element={<GameResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
