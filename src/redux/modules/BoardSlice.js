import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

// 서버주소 : https://coding-kym.shop

export const __getBoard = createAsyncThunk(
  "GET_BOARD",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/tb/posts`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __SearchBoard = createAsyncThunk(
  "SEARCH_BOARD",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/tb/posts?q=${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __getBoardDetail = createAsyncThunk(
  "GET_BOARDDETAIL",
  async (payload, thunkAPI) => {
    console.log("상세 페이로드", payload);
    try {
      const { data } = await instance.get(`/tb/posts/${payload.id}`);
      console.log("상세 데이터", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __postBoard = createAsyncThunk(
  "POST_BOARD",
  async (payload, thunkAPI) => {
    console.log("나글쓰기페이로드", payload);
    try {
      const { data } = await instance.post("/tb/posts", payload);
      alert("게시글이 등록되었습니다.");
      // window.location.replace("/post");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("글쓰기에러", error);
    }
  }
);

export const __deleteBoard = createAsyncThunk(
  "DELETE_BOARD",
  async (payload, thunkAPI) => {
    console.log("나글삭제페이로드", payload);
    try {
      const { data } = await instance.delete(`/tb/posts/${payload.id}`);
      console.log("나글삭데이터", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("글삭에러", error);
    }
  }
);

export const __modifyBoard = createAsyncThunk(
  "modify_BOARD",
  async (payload, thunkAPI) => {
    console.log("나글수정페이로드", payload);
    try {
      const { data } = await instance.put(`/tb/posts/${payload.id}`, {
        title: payload.title,
        content: payload.content,
        pet: payload.pet,
        mediaList: payload.mediaList,
        local: payload.category1,
        localdetail: payload.category2,
      });
      alert("게시글이 수정되었습니다.");
      // window.location.replace("/post");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("글수정에러", error);
    }
  }
);

export const __boardlike = createAsyncThunk(
  "BOARD_LIKE",
  async (payload, thunkAPI) => {
    console.log("어흥페이로드", payload);
    try {
      const { data } = await instance.post(`tb/posts/${payload}/heart`);
      console.log("어흥나 좋아요", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("좋아요 에러", error);
    }
  }
);

const initialState = {
  posts: [],
  isLoading: true,
  post: null,
};

const BoardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {
    [__getBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data;
      console.log("어흥난풀필드", state, action);
    },
    [__getBoard.rejected]: (state, action) => {
      state.isLoading = false;
      console.log("나리젝티드", action);
    },

    [__SearchBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data;
      console.log("검색", state, action);
    },
    [__SearchBoard.rejected]: (state, action) => {
      state.isLoading = false;
      console.log("나리젝티드", action);
    },

    [__getBoardDetail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getBoardDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state.isLoading);
      state.post = action.payload.data;
    },
    [__getBoardDetail.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__modifyBoard.fulfilled]: (state, action) => {},
    [__modifyBoard.rejected]: (state, action) => {},
    [__postBoard.fulfilled]: (state, action) => {},
    [__postBoard.rejected]: (state, action) => {},
  },
});

export default BoardSlice.reducer;
