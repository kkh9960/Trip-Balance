import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

export const __getBestFive = createAsyncThunk(
  "GET_BESTFIVE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get("/tb/bestfive");

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const bestSlice = createSlice({
  name: "best",
  initialState,
  reducers: {},
  extraReducers: {
    [__getBestFive.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBestFive.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__getBestFive.rejected]: (state, action) => {
      state.user.isLoading = false;
      state.user.error = action.payload;
    },
  },
});

export default bestSlice.reducer;
