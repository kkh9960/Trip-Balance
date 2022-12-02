import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../lib/instance";
import axios from "axios";
import { useCookies } from "react-cookie";
import React, { useState } from "react";

const initialState = {};

export const KaKaoLogin = createAsyncThunk(
  "kakao/login",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `https://tbtbtb.shop/tb/ouath/kakao?code=${payload}`
      );

      // const [cookie, setCookie, removeCookie] = useCookies();
      // sessionStorage.setItem("email", data.data.data.email);
      // sessionStorage.setItem("nickName", data.data.data.nickName);
      // setCookie(
      //   "refreshToken",
      //   data.request.getResponseHeader("refresh-token")
      // );
      // setCookie("token", data.request.getResponseHeader("authorization"));
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
