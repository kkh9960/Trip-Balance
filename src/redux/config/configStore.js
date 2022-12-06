import { configureStore } from "@reduxjs/toolkit";
import MapSlice from "../modules/MapSlice";

import BoardSlice from "../modules/BoardSlice";
import gameInfo from "../modules/GameSlice";
import MyInforSlice from "../modules/MyPageSlice";
import commentSlice from "../modules/CommentSlice";
import gameResult from "../modules/GameResultSlice";

const store = configureStore({
  reducer: {
    MapSlice,
   
    BoardSlice,
    gameInfo,
    MyInforSlice,
    commentSlice,
    gameResult,
  },
});

export default store;
