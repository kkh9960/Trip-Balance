import { configureStore } from "@reduxjs/toolkit";
import BestSlice from "../modules/BsetFiveSlice";
import MapSlice from "../modules/MapSlice";
import WeatherSlice from "../modules/WeatherSlice";
import PostSlice from "../modules/PostSlice";
import gameInfo from "../modules/GameSlice";

const store = configureStore({
  reducer: {
    BestSlice,
    MapSlice,
    WeatherSlice,
    PostSlice,
    gameInfo,
  },
});

export default store;
