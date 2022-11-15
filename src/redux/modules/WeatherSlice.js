import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getWeatherData = createAsyncThunk(
  "GET_WEATTHERDATA",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("localhost:3000", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      
    }
  }
);

const initialState = {
  data: {
    "SKY": "3",
    "WSD": "1.1",
    "하늘상태": "1: 맑음, 3: 구름많음, 4: 흐림",
    "WAV": "0",
    "POP": "20",
    "UUU": "-0.8",
    "PTY": "0",
    "REH": "80",
    "VEC": "124",
    "SNO": "적설없음",
    "TMP": "14",
    "VVV": "0.6",
    "다른 코드": "TMP: 현재 기온, PTY: 강수확률, REH: 습도",
    "PCP": "강수없음"
  },
  isLoding: false,
  error: null,
}

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: {
    [__getWeatherData.pending]: (state) => {
      state.isLoading = true;
    },
    [__getWeatherData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getWeatherData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default weatherSlice.reducer;