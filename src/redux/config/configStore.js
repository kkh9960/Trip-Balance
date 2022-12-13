import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import MapSlice from "../modules/MapSlice";

import BoardSlice from "../modules/BoardSlice";
import gameInfo from "../modules/GameSlice";
import MyInforSlice from "../modules/MyPageSlice";
import commentSlice from "../modules/CommentSlice";
import gameResult from "../modules/GameResultSlice";
import profilebtn from "../modules/profile";

const rootReducer = combineReducers({ profilebtn: profilebtn });
const store = configureStore({
  reducer: {
    MapSlice,
    BoardSlice,
    gameInfo,
    MyInforSlice,
    commentSlice,
    gameResult,
    rootReducer,
  },
});

export default store;
