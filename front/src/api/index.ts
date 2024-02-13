import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_BASE_API_PATH, REACT_APP_BASE_URL } from "../global-config";
import {
  YANDEX_GEOKODER_API_KEY,
  YANDEX_WEATHER_API_KEY,
} from "../utils/constants/api";

export enum queryMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}
const baseQuery = fetchBaseQuery({
  baseUrl: REACT_APP_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("X-Yandex-API-Key", YANDEX_WEATHER_API_KEY);
    // headers.set("Content-Type", YANDEX_GEOKODER_API_KEY);
    return headers;
  },
});

export const api = createApi({
  reducerPath: REACT_APP_BASE_API_PATH,
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
