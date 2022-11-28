import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../lib/instance";

// 서버주소 : https://coding-kym.shop

export const __getBoard = createAsyncThunk(
  "GET_BOARD",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/tb/posts?page=${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __getBoardinfi = createAsyncThunk(
  "GET_BOARD_INFI",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/tb/posts?page=${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __getBoardTotal = createAsyncThunk(
  "GET_BOARD_TOTAL",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/tb/posts/search?keyword=${payload.useInput}&page=${payload.pageLocal}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __getBoardTotalinfi = createAsyncThunk(
  "GET_BOARD_TOTAL_INFI",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.get(
        `/tb/posts/search?keyword=${payload.useInput}&page=${payload.page}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __getBoardLocal = createAsyncThunk(
  "GET_BOARD_LOCAL",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await instance.get(
        `/tb/posts/search/${payload.selLocal}?keyword=${payload.useInput}&page=${payload.pageLocal}`
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);
export const __getBoardLocalinfi = createAsyncThunk(
  "GET_BOARD_LOCAL_INFI",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await instance.get(
        `/tb/posts/search/${payload.selLocal}?keyword=${payload.useInput}&page=${payload.page}`
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __getmypost = createAsyncThunk(
  "GET_MY_POST_BOARD",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/tb/posts/otherpost/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __getbestfive = createAsyncThunk(
  "GET_BEST_BOARD",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/tb/posts/bestfive`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return console.log("상세에러", error);
    }
  }
);

export const __getcategory = createAsyncThunk(
  "GET_CATEGORY_BOARD",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/tb/posts/search/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);

export const __getcatenormal = createAsyncThunk(
  "GET_CATE_BOARD",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/tb/posts?page=0`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
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
      window.location.replace("/post");
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
      alert("게시글이 삭제되었습니다");
      window.location.replace("/post");
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
      window.location.replace("/post");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("글수정에러", error);
    }
  }
);

export const __boardlike = createAsyncThunk(
  "BOARD_LIKE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(`tb/posts/${payload}/heart`);
      console.log("좋아요", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("좋아요 에러", error);
    }
  }
);

const initialState = {
  posts: [],
  // postTotal: [],
  // postLocal: [],
  isLoading: true,
  post: null,
  myposts: [],
  bestpost: [],
  isLastPage: false,
};

const BoardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {
    [__getBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.posts = action.payload.data[0].postResponseDtoList;
      // action.payload.data[0].postResponseDtoList.map((item, idx) =>
      //   state.posts.push(item)
      // );
      // state.isLastPage = action.payload.data[0].isLastPage;
    },
    [__getBoard.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getBoardinfi.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      action.payload.data[0].postResponseDtoList.map((item, idx) =>
        state.posts.push(item)
      );
      state.isLastPage = action.payload.data[0].isLastPage;
    },
    [__getBoardinfi.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [__getBoardTotal.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);

      state.posts = action.payload.data[0].postResponseDtoList;

      //state.postTotal.splice(0);
      // action.payload.data[0].postResponseDtoList.map((item, idx) =>
      //   state.postTotal.push(item)
      // );
      // state.isLastPage = action.payload.data[0].isLastPage;
    },

    [__getBoardTotal.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getBoardTotalinfi.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);

      action.payload.data[0].postResponseDtoList.map((item, idx) =>
        state.posts.push(item)
      );
      state.isLastPage = action.payload.data[0].isLastPage;
    },

    [__getBoardTotalinfi.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [__getBoardLocal.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);

      state.posts = action.payload.data[0].postResponseDtoList;

      // action.payload.data[0].postResponseDtoList.map((item, idx) =>
      //   state.postLocal.push(item)
      // );
      // state.isLastPage = action.payload.data[0].isLastPage;
    },

    [__getBoardLocal.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getBoardLocalinfi.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);

      action.payload.data[0].postResponseDtoList.map((item, idx) =>
        state.posts.push(item)
      );
      state.isLastPage = action.payload.data[0].isLastPage;
    },

    [__getBoardLocalinfi.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getbestfive.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.bestpost = action.payload.data;
    },
    [__getbestfive.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getcategory.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.posts = action.payload.data;
    },
    [__getcategory.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getcatenormal.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data;
    },
    [__getcatenormal.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getmypost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myposts = action.payload.data;
      console.log("내가쓴글", action.payload);
    },
    [__getmypost.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [__SearchBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data;
      console.log("검색", state, action);
    },
    [__SearchBoard.rejected]: (state, action) => {
      state.isLoading = false;
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
