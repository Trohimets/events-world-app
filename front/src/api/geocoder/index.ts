{
}
// import { api, queryMethod } from "..";

// const GET_FILTER_URL =
//   "api.weather.yandex.ru/v2/informers?lat=55.75396&lon=37.620393";

// export const forecastsApi = api.injectEndpoints({
//   endpoints: (build) => ({
//     getForecastsByCoords: build.query<any, any>({
//       query: (body) => ({
//         url: `${GET_FILTER_URL}?lat=${body.lat}&lon=${body.lon}&[lang='ru_RU']`,
//         method: queryMethod.GET,
//         credentials: "same-origin",
//       }),
//     }),
//   }),
//   overrideExisting: true,
// });

// export const { useGetForecastsByCoordsQuery } = forecastsApi;
