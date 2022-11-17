import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../modules/Signup";
import myInfo from "../modules/MyPageSlice";
import gameInfo from "../modules/GameSlice";

const store = configureStore({
  reducer: { authSlice, myInfo, gameInfo },
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
