import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AXIOS from "axios";

const initialState = {
  value: 0,
  adminLogin: false,
};

export const adminLogin = createAsyncThunk(
  "admincounter/adminLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await AXIOS.post(
        "http://localhost:9000/admin/login",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const adminreg = createAsyncThunk(
  "admincounter/adminreg",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await AXIOS.post(
        "http://localhost:9000/admin/register",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const adminevent = createAsyncThunk(
  "admincounter/adminevent",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await AXIOS.post(
        "http://localhost:9000/admin/event",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const counterSlice = createSlice({
  name: "admincounter",
  initialState,
  reducers: {
    logout: (state) => {
      alert("Logged Out");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminreg.fulfilled, (state, action) => {
        alert(action.payload.message);
      })
      .addCase(adminreg.rejected, (state, action) => {
        alert("Admin Registration Failed");
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        let status = action.payload.status;
        console.log(status);
        if (status == 1) {
          alert("Login Success");
          state.adminLogin = true;
        } else {
          alert("Incorrect Credentials");
          state.adminLogin = false;
        }
      })
      .addCase(adminLogin.rejected, (state, action) => {
        alert(action.payload.message);
        state.adminLogin = false;
      })
      .addCase(adminevent.fulfilled, (state, action) => {
        alert(action.payload.message);
      })
      .addCase(adminevent.rejected, (state, action) => {
        alert(action.payload.message);
      });
  },
});

export const { logout } = counterSlice.actions;
export default counterSlice.reducer;
