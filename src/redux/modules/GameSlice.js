import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

export const __GameInfoGet = createAsyncThunk(
  "Game_Select",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.get(`tb/question/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

export const gameSlice = createSlice({
  name: "gameInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [__GameInfoGet.pending]: (state) => {
      state.isLoading = true;
    },
    [__GameInfoGet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__GameInfoGet.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gameSlice.reducer;
