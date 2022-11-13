import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../login/LoginPage";
import PostPage from "../PostPage/PostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
