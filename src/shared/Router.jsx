import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../login/Login";

import Signup from "../login/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
