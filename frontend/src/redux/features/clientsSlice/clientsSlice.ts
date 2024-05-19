import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
// Types
import { ClientsSliceState } from "./types/ClientsSliceState";
// Services
import clientSliceService from "./clientsSliceService";
// Root State
import { RootState } from "redux/rootReducer";
import { ClientData } from "./types/ClientData";

const initialState: ClientsSliceState = {
  clients: [],
  status: {
    loading: "idle",
    loadingClientInfo: "idle",
  },
  error: null,
  clientInfo: null,
};

export const getClients = createAsyncThunk(
  "client/getClients",
  async (token: string) => {
    const client = await clientSliceService.fetchClients(token);
    return client;
  }
);

export const getClient = createAsyncThunk(
  "client/getClient",
  async (data: ClientData) => {
    const client = await clientSliceService.fetchClient(data);
    return client;
  }
);

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClients.pending, (state) => {
      state.status.loading = 'loading';
      state.error = null;
    });
    builder.addCase(getClients.fulfilled, (state, action) => {
      console.log('Clients', action.payload)
      state.clients = action.payload;
      state.status.loading = 'succeeded';
    });
    builder.addCase(getClients.rejected, (state, action) => {
      state.status.loading = 'idle';
      state.error = action.error.message;
    });
    builder.addCase(getClient.pending, (state) => {
      state.status.loadingClientInfo = 'loading';
      state.error = null;
    });
    builder.addCase(getClient.fulfilled, (state, action) => {
      console.log('Client Info', action.payload)
      state.clientInfo = action.payload;
      state.status.loadingClientInfo = 'succeeded';
    });
    builder.addCase(getClient.rejected, (state, action) => {
      state.status.loadingClientInfo = 'idle';
      state.error = action.error.message;
    });
  }
});

const selectClientsState = (state: RootState) => state.client;

export const selectClients = createSelector(
  selectClientsState,
  (state) => state.clients,
);
export const selectLoading = createSelector(
  selectClientsState,
  (state) => state.status.loading,
);
export const selectError = createSelector(
  selectClientsState,
  (state) => state.error,
);
export const selectClientInfo = createSelector(
  selectClientsState,
  (state) => state.clientInfo,
);
export const selectClientInfoLoading = createSelector(
  selectClientsState,
  (state) => state.status.loadingClientInfo,
);

export default clientSlice.reducer;