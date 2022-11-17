import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getBestFive = createAsyncThunk(
  "GET_BESTFIVE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "http://52.78.174.102:8080/tb/bestfive",
        payload
      ); //http://52.78.174.102:8080/tb/bestfive
      console.log("gg", data);
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
    },
    [__getBestFive.rejected]: (state, action) => {
      state.user.isLoading = false;
      state.user.error = action.payload;
    },
  },
});

export default bestSlice.reducer;
