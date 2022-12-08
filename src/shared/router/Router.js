import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.js";
const MainPage = lazy(() => import("../../pages/mainPage/MainPage"));
const MyPage = lazy(() => import("../../pages/mypage/MyPage"));
const MemberPage = lazy(() => import("../../pages/memberPage/MemberPage"));
const PostViewPage = lazy(() => import("../../pages/post/PostViewPage"));
const PostWritePage = lazy(() => import("../../pages/post/PostWritePage"));
const PostDetailPage = lazy(() => import("../../pages/post/PostDetailPage"));
const PostModifyPage = lazy(() => import("../../pages/post/PostModifyPage"));
const GameStart = lazy(() => import("../../pages/game/GameStart"));
const GameResult = lazy(() => import("../../pages/game/GameResult"));
const KaKao = lazy(() => import("../../components/login/KaKao"));
const Game = lazy(() => import("../../pages/game/Game"));
const Banner = lazy(() => import("../../components/post/BannerSlide"));
const Router = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/memberpage/:id" element={<MemberPage />} />
          <Route path="/post" element={<PostViewPage />} />
          <Route path="/write" element={<PostWritePage />} />
          <Route path="/detail/:id" element={<PostDetailPage />} />
          <Route path="/modify/:id" element={<PostModifyPage />} />
          <Route path="/start" element={<GameStart />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/game/:aa/:id" element={<Game />} />
          <Route path="/gameResult/:aa/:id" element={<GameResult />} />
          <Route path="/tb/oauth/kakao" element={<KaKao />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
