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
        `tb/game/${payload.GameID}/${payload.QID}`
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __GameLastPost = createAsyncThunk(
  "Game_Last",
  async (payload, thunkAPI) => {
    console.log(payload.GameID);
    console.log(payload.QID);
    try {
      const { data } = await instance.post(
        `tb/game/result/${payload.GameID}/${payload.QID}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
    }
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
    [__GameLastPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__GameLastPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__GameLastPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gameSlice.reducer;
