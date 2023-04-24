import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

const initialUserSlice = {
  current: {
    email: "",
    password: "",
  },
  loading: "",
  settings: {},
};

// Create the thunk - register action
export const register = createAsyncThunk("users/register", async (payload) => {
  // Call Api here to register

  const responseData = await userApi.register(payload);
  console.log(responseData.user);
  // Save data to local storage

  localStorage.setItem("access_token", responseData.jwt);
  localStorage.setItem("user", JSON.stringify(responseData.user));

  // Return user data
  // const responseData = await userApi.fetchById(userId);
  return responseData.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialUserSlice,
  //  synchronous action
  reducers: {
    logout(state) {
      state.current = {};
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    },
  },
  // asynchronous action
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

// dispatch()

export default userSlice;
