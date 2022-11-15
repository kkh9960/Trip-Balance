import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/Signup";
import myInfoSlice from "../modules/MyPageSlice";
import tokenReducer from "../modules/Auth";
import LoginSlice from "../modules/Login";
const store = configureStore({
  reducer: { authSlice, token: tokenReducer, LoginSlice,myInfoSlice  },




});

export default store;
