import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../login/LoginPage";
import PostPage from "../PostPage/PostPage";
import { AnimatePresence } from "framer-motion";
import Home from "../Home";
const Router = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
