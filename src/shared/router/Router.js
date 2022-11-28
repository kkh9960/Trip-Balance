import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import MainPage from "../../pages/mainPage/MainPage";
import MyPage from "../../pages/mypage/MyPage";
import PostViewPage from "../../pages/post/PostViewPage";
import PostWritePage from "../../pages/post/PostWritePage";
import PostDetailPage from "../../pages/post/PostDetailPage";
import PostModifyPage from "../../pages/post/PostModifyPage";
import Game from "../../pages/game/Game";
import GameStart from "../../pages/game/GameStart";
import GameResult from "../../pages/game/GameResult";

import Signup from "../../components/login/Signup";


// import Test from "../../pages/Test";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/post" element={<PostViewPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<PostWritePage />} />
        <Route path="/detail/:id" element={<PostDetailPage />} />
        <Route path="/modify/:id" element={<PostModifyPage />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/start" element={<GameStart />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/game/:aa/:id" element={<Game />} />
        <Route path="/gameResult/:aa/:id" element={<GameResult />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
