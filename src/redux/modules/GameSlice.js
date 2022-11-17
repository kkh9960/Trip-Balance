import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

export const __GameInfoGet = createAsyncThunk(
  "Game_Select",
  async (payload, thunkAPI) => {
    console.log(payload.GameID);
    console.log(payload.QID);
    try {
      const { data } = await instance.get(
        `/game/${payload.GameID}/${payload.QID}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

export const __GameFirstGet = createAsyncThunk(
  "Game_First",
  async (payload, thunkAPI) => {
    console.log("1번째");
    try {
      const { data } = await instance.get("/tb/game/start");
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  data: { data: [{}] },
  isLoading: false,
  error: null,
};

export const gameSlice = createSlice({
  name: "gameInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [__GameFirstGet.pending]: (state) => {
      state.isLoading = true;
    },
    [__GameFirstGet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__GameFirstGet.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gameSlice.reducer;
