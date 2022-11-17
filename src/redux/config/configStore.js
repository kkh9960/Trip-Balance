<<<<<<< HEAD
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../modules/Signup";
import myInfo from "../modules/MyPageSlice";
import gameInfo from "../modules/GameSlice";

const store = configureStore({
  reducer: { authSlice, myInfo, gameInfo },
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
=======
import { configureStore } from "@reduxjs/toolkit";
import BestSlice from "../modules/BsetFiveSlice";
import MapSlice from "../modules/MapSlice";
import WeatherSlice from "../modules/WeatherSlice";
import PostSlice from "../modules/PostSlice";

const store = configureStore({
  reducer: {
    BestSlice, MapSlice, WeatherSlice, PostSlice
  },
>>>>>>> 05d0ff3f4b1fea3a1a04343c3f81d800062f62b7
});

export default store;