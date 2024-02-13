import { api, queryMethod } from "..";

// const GET_FORECAST_URL = "api.weather.yandex.ru/v2/informers";

export const forecastsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getForecastsByCoords: build.query<any, any>({
      query: (body) => ({
        url: `getWeather`,
        method: queryMethod.POST,
        credentials: "same-origin",
        body: body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetForecastsByCoordsQuery } = forecastsApi;
