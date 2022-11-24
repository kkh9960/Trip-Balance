import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/mainPage/MainPage";
import MyPage from "../../pages/mypage/MyPage";
import PostPage from "../../PostPage/PostPage";
import BoardWrite from "../../pages/BoardWrite";
import Game from "../../pages/game/Game";
import GameStart from "../../pages/game/GameStart";
import GameResult from "../../pages/game/GameResult";
import BoardPostDetail from "../../pages/BoardPostDetail";
import BoardPostModify from "../../pages/BoardPostModify";
import Loading from "../../components/Loading/Loading";
import Signup from "../../login/Signup";
import Posts, { InfiniteTest } from "../../Querytest/InfiniteTest";

// import Test from "../../pages/Test";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<BoardWrite />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<BoardWrite />} />
        <Route path="/detail/:id" element={<BoardPostDetail />} />
        <Route path="/modify/:id" element={<BoardPostModify />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/start" element={<GameStart />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/game/:aa/:id" element={<Game />} />
        <Route path="/gameResult/:aa/:id" element={<GameResult />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<Posts />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
