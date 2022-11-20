import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

// 회원정보
export const __getMyInformation = createAsyncThunk(
  "GET_MY_INFO",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.get(
        `/tb/members/info/${payload}`,
        payload
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);
export const __postMyInformation = createAsyncThunk(
  "POST_MY_INFO",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.post(`/tb/members/myself`, payload);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);

//내가 작성한글
export const __getMyWrite = createAsyncThunk(
  "GET_MY_WRITE",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.get("/tb/mypage/posts", payload);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);

// 좋아요한 글
export const __getMyPick = createAsyncThunk(
  "GET_MY_PICK",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.get("/tb/mypage/hearts/pageNum", payload);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const myInfoSlice = createSlice({
  name: "myInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMyInformation.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyInformation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getMyInformation.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getMyWrite.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyWrite.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getMyWrite.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getMyPick.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPick.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getMyPick.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default myInfoSlice.reducer;
