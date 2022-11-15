import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../login/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
