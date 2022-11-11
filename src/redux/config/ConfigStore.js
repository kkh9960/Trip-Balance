import { configureStore } from "@reduxjs/toolkit";
import BestSlice from "../modules/BsetFiveSlice";
import MapSlice from "../modules/MapSlice";
import WeatherSlice from "../modules/WeatherSlice";
import BoardSlice from "../modules/BoardSlice";

const store = configureStore({
  reducer: {
    BestSlice,
    MapSlice,
    WeatherSlice,
    BoardSlice,
  },
});

export default store;
