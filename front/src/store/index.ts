import { configureStore } from "@reduxjs/toolkit";
import UserReduser from "./user";
import ModalReduser from "./modal";
import { combineReducers } from "redux";
import { api } from "../api";

enum ReducerName {
  User = "user",
  Modal = "modal",
  Theme = "theme",
  Auth = "auth",
}

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [ReducerName.User]: UserReduser,
  [ReducerName.Modal]: ModalReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
