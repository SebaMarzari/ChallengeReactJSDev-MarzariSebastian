import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
// Types
import { UserSliceState } from "./types/UserSliceState";
// Services
import userSliceService from "./userSliceService";
// Types
import { UserLogin } from "./types/UserLogin";
// Root State
import { RootState } from "redux/rootReducer";

const initialState: UserSliceState = {
  user: null,
  status: {
    loading: "idle",
  },
  error: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (data: UserLogin) => {
    const { email, password } = data;
    const user = await userSliceService.login(email, password);
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status.loading = 'loading';
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status.loading = 'succeeded';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status.loading = 'idle';
      state.error = action.error.message;
    });
  }
});


const selectUserState = (state: RootState) => state.user;

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user,
);
export const selectLoading = createSelector(
  selectUserState,
  (state) => state.status.loading,
);
export const selectError = createSelector(
  selectUserState,
  (state) => state.error,
);

export default userSlice.reducer;