import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../modules/Signup";

const store = configureStore({
  reducer: { authSlice },
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
