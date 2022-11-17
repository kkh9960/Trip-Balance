import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../modules/Signup";
import myInfoSlice from "../modules/MyPageSlice";
import BoardSlice from "../modules/BoardSlice";

const store = configureStore({
  reducer: { authSlice, myInfoSlice, BoardSlice },
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
