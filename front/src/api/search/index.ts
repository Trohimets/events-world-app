import { api, queryMethod } from "..";

export const searchApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSearchResult: build.mutation<any, any>({
      query: (data) => ({
        url: "requests",
        method: queryMethod.POST,
        body: {
          user_id: data.user_id,
          search_name: data.search_name,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetSearchResultMutation } = searchApi;
