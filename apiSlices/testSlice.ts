import {apiSlice} from '.';
const FORECAST_URL = 'forecast.json';

// "https://api.weatherapi.com/v1/forecast.json?q=sambalpur&days=7&key=56cb83d4a59f4114b9073138241403",
export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getWeatherForecast: builder.query<
      any,
      {city: string; days: number; key: string}
    >({
      query: ({city, days, key}) =>
        `${FORECAST_URL}?q=${city}&days=${days}&key=${key}`,
    }),
  }),
});

export const {useGetWeatherForecastQuery} = postApiSlice;
