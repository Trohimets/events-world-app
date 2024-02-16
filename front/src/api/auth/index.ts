import { api, queryMethod } from "..";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLoginUser: build.mutation<any, any>({
      query: (data) => ({
        url: `${data.authType === "register" ? "/register" : "login"}`,
        method: queryMethod.POST,
        // credentials: "same-origin",
        body: { username: data.username, password: data.password },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetLoginUserMutation } = authApi;
