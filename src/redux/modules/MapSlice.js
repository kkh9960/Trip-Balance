import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {
    cnt: [
      {
        peopleCnt: 126360,
        gender: "male",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 121841,
        gender: "female",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 14463,
        age: "10",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 49448,
        age: "20",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 70475,
        age: "30",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 57865,
        age: "40",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 29999,
        age: "50",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 22643,
        age: "60_over",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 45883,
        type: "family",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 193623,
        type: "not_family",
        location: "경기도 가평군",
      },
      {
        peopleCnt: 8695,
        type: "family_w_child",
        location: "경기도 가평군",
      },
    ],
    weather: {
      SKY: "1",
      VEC: "124",
      PTY: "0",
      POP: "20",
      WAV: "0",
      UUU: "-0.8",
      REH: "80",
      TMP: "14",
      WSD: "0",
      SNO: "적설없음",
      PCP: "강수없음",
      VVV: "0.6",
      "다른 코드": "TMP: 현재 기온, PTY: 강수확률, REH: 습도",
    },
  },
  Apidata: {
    lat: "",
    lng: "",
  },
  isLoading: false,
  error: null,
};

// 기본 첫 데이터를 받아오는 것 설정하기
export const __getMapData = createAsyncThunk(
  "GET_MAPDATA",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("/tb/apitest", payload); //http://43.200.139.249:8080/tb/apitest
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

export const __postMapData = createAsyncThunk(
  "POST_MAPDATA",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "https://coding-kym.shop/tb/apimap",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMapData.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMapData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.peopleCnt = action.payload;
    },
    [__getMapData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postMapData.pending]: (state) => {
      state.isLoading = true;
      console.log("데이터 불러오는중");
    },
    [__postMapData.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload === undefined) {
        state.data = state.data;
      } else {
        state.data = action.payload;
      }
    },
    [__postMapData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default mapSlice.reducer;
