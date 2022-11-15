import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../modules/Signup";
import myInfoSlice from "../modules/MyPageSlice";

const store = configureStore({
  reducer: { authSlice, myInfoSlice },
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
