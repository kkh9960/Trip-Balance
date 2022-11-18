import { configureStore } from "@reduxjs/toolkit";
import BestSlice from "../modules/BsetFiveSlice";
import MapSlice from "../modules/MapSlice";
import WeatherSlice from "../modules/WeatherSlice";
import PostSlice from "../modules/PostSlice";
import BoardSlice from "../modules/BoardSlice";
import gameInfo from "../modules/GameSlice";
import commentSlice from "../modules/CommentSlice";
import gameResult from "../modules/GameResultSlice";


const store = configureStore({
  reducer: {
    BestSlice,
    MapSlice,
    WeatherSlice,
    PostSlice,
    BoardSlice,
    gameInfo,
    commentSlice,
    gameResult,
  },
});

export default store;
