import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

export const __getBestFive = createAsyncThunk(
  "GET_BESTFIVE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get("/tb/bestfive", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

const initialState = {
  data: [
    {
      tite: "제목",
      img: "이미지",
      heartnum: 4,
      hear: true,
    },
  ],
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
      state.data = action.payload;
      console.log("fivepayload", action.payload);
    },
    [__getBestFive.rejected]: (state, action) => {
      state.user.isLoading = false;
      state.user.error = action.payload;
    },
  },
});

export default bestSlice.reducer;
