import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

export const __getPostData = createAsyncThunk(
  "GET_POSTDATA",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `https://coding-kym.shop/tb/localpost/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

const initialState = {
  data: {
    data: [
      {
        id: 1,
        img: "이미지입니다.",
        title: "제목입니다.",
        comment: "내용입니다.",
      },
    ],
  },
  isLoading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPostData.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getPostData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
