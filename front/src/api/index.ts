import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_BASE_API_PATH, REACT_APP_BASE_URL } from "../global-config";

export enum queryMethod {
  GET = "get",
  POST = "POST",
  PUT = "put",
  DELETE = "delete",
}
const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Authorization", localStorage.getItem("token") ?? "");
    return headers;
  },
});

export const api = createApi({
  reducerPath: REACT_APP_BASE_API_PATH,
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
