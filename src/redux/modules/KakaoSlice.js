import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {};

export const KaKaoLogin = createAsyncThunk(
  "kakao/login",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `https://tbtbtb.shop/tb/ouath/kakao?code=${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const KaoKaoLoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [KaKaoLogin.fulfillWithValue]: (state, action) => {},
    [KaKaoLogin.rejected]: (state, action) => {},
  },
});

export default KaoKaoLoginSlice;
