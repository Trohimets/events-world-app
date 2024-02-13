import { useGetForecastsByCoordsQuery } from "../../api/forecasts";

export const SearchPage = () => {
  const body: any = {
    lat: "59.9386",
    lon: "30.3141",
  };
  const { data } = useGetForecastsByCoordsQuery(body);

  console.log(data);
  return <>Страница search</>;
};
