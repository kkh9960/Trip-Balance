import { configureStore } from "@reduxjs/toolkit";
import BestSlice from "../modules/BsetFiveSlice";
import MapSlice from "../modules/MapSlice";
import WeatherSlice from "../modules/WeatherSlice";

const store = configureStore({
  reducer: {
    BestSlice, MapSlice, WeatherSlice
  },
});

export default store;