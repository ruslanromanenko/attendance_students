import mainReducer from "./reducers/MainSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    mainReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
