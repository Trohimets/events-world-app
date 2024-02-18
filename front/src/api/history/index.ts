import { api, queryMethod } from "..";

export const historyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHistory: build.mutation<any, any>({
      query: (data) => ({
        url: "history",
        method: queryMethod.POST,
        body: {
          user_id: data.user_id,
          offset: data.offset,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetHistoryMutation } = historyApi;
