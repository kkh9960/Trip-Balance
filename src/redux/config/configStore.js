import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/Signup";
import tokenReducer from "../modules/Auth";
import LoginSlice from "../modules/Login";
const store = configureStore({
  reducer: { authSlice, token: tokenReducer, LoginSlice },
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
