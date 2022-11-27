import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

// 회원정보
export const __getMyInformation = createAsyncThunk(
  "GET_MY_INFO",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`tb/mypage/info`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);
//회원정보 수정
export const __putMyInformation = createAsyncThunk(
  "PUT_MY_INFO",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.put(`tb/mypage/setinfo`, {
        nickName: payload.nickName,
        self: payload.self,
        profileImg: payload.profileImg,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);
// 밸런스게임데이터
// export const __getTotalGameData = createAsyncThunk(
//   "GET_MY_GAMEDATA",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await instance.get(`tb/mypage/totaldb`, payload);
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {}
//   }
// );
//회원이 작성한 글목록
// export const __getMyPosts = createAsyncThunk(
//   "GET_MY_POST",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await instance.get("tb/mypage/posts", payload);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {}
//   }
// );

//좋아요한 글목록
export const __getMyPick = createAsyncThunk(
  "GET_MY_PICK",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get("tb/mypage/hearts", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

//내가 작성한글 들어가서 보는곳
export const __getMyWriteIn = createAsyncThunk(
  "GET_MY_WRITE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `tb/mypage/posts/${payload}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

const initialState = {
  myinfor: [],
  mywrite: [],
  myposts: [],
  mypick: [],
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
      state.myinfor = action.payload.data;
    },
    [__getMyInformation.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [__getMyPosts.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getMyPosts.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.myposts = action.payload.data;
    // },
    // [__getMyPosts.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    [__getMyWriteIn.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyWriteIn.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__getMyWriteIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //좋아요
    [__getMyPick.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPick.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mypick = action.payload.data;
    },
    [__getMyPick.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default MyInforSlice.reducer;
