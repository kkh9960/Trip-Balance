import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

// 서버주소 : https://coding-kym.shop

export const __getComment = createAsyncThunk(
  "GET_COMMENT",
  async (payload, thunkAPI) => {
    console.log("댓글조회", payload);
    try {
      const { data } = await instance.get(`tb/comments/${payload.id}`);
      console.log("댓글조회", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("댓글에러", error);
    }
  }
);

export const __postComment = createAsyncThunk(
  "WRITE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(`tb/comments`, {
        postId: payload.id.id,
        content: payload.content,
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("댓글에러", error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.delete(`tb/comments/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("댓글에러", error);
    }
  }
);

export const __modifyComment = createAsyncThunk(
  "MODIFY_COMMENT",
  async (payload, thunkAPI) => {
    console.log(payload);
    console.log(payload.id);
    try {
      const { data } = await instance.put(`tb/comments/${payload.id}`, {
        postId: payload.postId,
        content: payload.content,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("댓글에러", error);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: true,
};

const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload.data;
      console.log("풀필드", state.comments);
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload.data;
    },
    [__postComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload.data);
      console.log(state);
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__deleteComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (el) => el.commentId !== parseInt(action.meta.arg)
      );
      console.log(state.comments);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__modifyComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__modifyComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.comments = state.comment.map((el, i))
    },
    [__modifyComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default CommentSlice.reducer;
