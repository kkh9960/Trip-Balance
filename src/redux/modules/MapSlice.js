import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  peopleCnt: {
    CompData: [
      {
        "Type": {
        }
      },
    ],
    GenderData: [
      {
        "Gender": {
        }
      },
    ],
    Age: [
      {
        "Gender": {
        }
      },
    ],
  },
  Apidata: {
    lat: '',
    lng:'',
  },
  isLoading: false,
  error: null,
};


export const __getMapData = createAsyncThunk(
  "GET_MAPDATA",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("/tb/apitest", payload); //http://52.78.174.102:8080/tb/apitest
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      
    }
  }
);

export const __postMapData = createAsyncThunk(
  "POST_MAPDATA",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const { data } = await axios.post('http://52.78.174.102:8080/tb/apitest', payload);
      console.log('data', data)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
    }
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
    },
    [__postMapData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Apidata = console.log(action.payload)
    },
    [__postMapData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default mapSlice.reducer;