import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";
import { current } from "@reduxjs/toolkit";

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
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("댓글에러", error);
    }
  }
);

//tb/recomments

export const __postReComment = createAsyncThunk(
  "POST_RECOMMENT",
  async (payload, thunkAPI) => {
    console.log("대댓", payload);
    try {
      const { data } = await instance.post(`tb/recomments`, payload);
      console.log("대댓글조회", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("대댓글에러", error);
    }
  }
);

export const __modifyReComment = createAsyncThunk(
  "MODIFY_RECOMMENT",
  async (payload, thunkAPI) => {
    console.log("대댓글데이터", payload);
    try {
      const { data } = await instance.put(
        `tb/recomments/${payload.recommentId}`,
        {
          commentId: payload.commentId,
          content: payload.content,
        }
      );
      console.log("대댓글수정", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("대댓글에러", error);
    }
  }
);

export const __deleteReComment = createAsyncThunk(
  "DELETE_RECOMMENT",
  async (payload, thunkAPI) => {
    console.log("삭제페이로드", payload);
    try {
      const { data } = await instance.delete(`tb/recomments/${payload}`);
      console.log("삭제데이터", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("삭제에러", error);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: true,
};

const CommentSlice = createSlice({
  name: "comment, recomment",
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
      console.log(action);
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
      const a = current(state).comments.filter(
        (a) => a.commentId === parseInt(action.payload.data.commentId)
      );

      const indexNum = current(state).comments.indexOf(a[0]);

      state.comments = state.comments.map((item, idx) =>
        idx === indexNum
          ? { ...item, content: action.payload.data.content }
          : item
      );
    },
    [__modifyComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__postReComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postReComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments?.map((a) =>
        a.commentId === parseInt(action.payload.data.commentId)
          ? a.reComments?.push(action.payload.data)
          : a
      );
    },
    [__postReComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__modifyReComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__modifyReComment.fulfilled]: (state, action) => {
      state.isLoading = false;

      const a = current(state).comments.filter(
        (a) => a.commentId === parseInt(action.payload.data.commentId)
      );

      const indexNum = current(state).comments.indexOf(a[0]);

      console.log("나수정", a);
      console.log("나수정", indexNum);

      state.comments = state.comments.map((item, idx) =>
        idx === indexNum
          ? {
              ...a[0],
              reComments: a[0].reComments.map((item) =>
                item.recommentId === parseInt(action.payload.data.recommentId)
                  ? action.payload.data
                  : item
              ),
            }
          : item
      );

      console.log(state);
      console.log("대댓글수정데이터", action.payload.data);
    },
    [__modifyReComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__deleteReComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteReComment.fulfilled]: (state, action) => {
      state.isLoading = false;

      console.log(action);

      const a = current(state).comments.filter(
        (a) => a.commentId === parseInt(action.payload.data.commentId)
      );

      const indexNum = current(state).comments.indexOf(a[0]);

      state.comments = state.comments.map((item, idx) =>
        idx === indexNum
          ? {
              ...a[0],
              reComments: [
                ...a[0].reComments?.filter(
                  (a) => a.recommentId !== action.payload.data.recommentId
                ),
              ],
            }
          : item
      );
    },
    [__deleteReComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default CommentSlice.reducer;
