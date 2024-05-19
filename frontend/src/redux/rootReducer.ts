import { combineReducers } from "@reduxjs/toolkit";
// Slice reducers
import userReducer from "./features/userSlice/userSlice";
import clientReducer from "./features/clientsSlice/clientsSlice";

const rootReducer = combineReducers({
    user: userReducer,
    client: clientReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;