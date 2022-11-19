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
        `/tb/members/info/${payload.id}`,
        payload
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);
export const __putMyInformation = createAsyncThunk(
  "PUT_MY_INFO",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.put(`/tb/mypage/setinfo`, {
        nickName: payload.nickName,
        self: payload.introduce,
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

//내가 작성한글
export const __getMyWrite = createAsyncThunk(
  "GET_MY_WRITE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get("/tb/mypage/posts", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);

// 좋아요한 글
export const __getMyPick = createAsyncThunk(
  "GET_MY_PICK",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get("/tb/mypage/hearts/pageNum", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);

const initialState = {
  data: {
    data: {},
  },
  isLoading: false,
  error: null,
};

export const MyInforSlice = createSlice({
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
      console.log(action.payload);
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
export default MyInforSlice.reducer;
