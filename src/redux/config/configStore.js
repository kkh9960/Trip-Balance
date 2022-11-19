import { configureStore } from "@reduxjs/toolkit";
import MapSlice from "../modules/MapSlice";
import PostSlice from "../modules/PostSlice";
import BoardSlice from "../modules/BoardSlice";
import gameInfo from "../modules/GameSlice";
import MyInforSlice from "../modules/MyPageSlice";

const store = configureStore({
  reducer: {
    MapSlice,
    PostSlice,
    BoardSlice,
    gameInfo,
    MyInforSlice,
  },
});

export default store;
