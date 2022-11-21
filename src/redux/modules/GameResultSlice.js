import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

export const __GameResultInfoGet = createAsyncThunk(
  "Game_Result",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`tb/game/result/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __GameResultIHotelGet = createAsyncThunk(
  "Game_Hotel",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`tb/hotel/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __GameResultIBlogGet = createAsyncThunk(
  "Game_Blog",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`tb/blog?query=${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: { data: "" },
  isLoading: false,
  error: null,
};

export const gameResultSlice = createSlice({
  name: "gameResult",
  initialState,
  reducers: {},
  extraReducers: {
    [__GameResultInfoGet.pending]: (state) => {
      state.isLoading = true;
    },
    [__GameResultInfoGet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__GameResultInfoGet.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__GameResultIHotelGet.pending]: (state) => {
      state.isLoading = true;
    },
    [__GameResultIHotelGet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hotel = action.payload;
    },
    [__GameResultIHotelGet.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__GameResultIBlogGet.pending]: (state) => {
      state.isLoading = true;
    },
    [__GameResultIBlogGet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.blog = action.payload;
    },
    [__GameResultIBlogGet.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export default gameResultSlice.reducer;
