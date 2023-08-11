export const GET_WEATHER='GET_WEATHER'
export const GET_WEATHER_SUCCESS='GET_WEATHER_SUCCESS'
export const GET_WEATHER_FAILURE='GET_WEATHER_FAILURE'
export const SEARCH_WEATHER='SEARCH_WEATHER'
export const SEARCH_WEATHER_FAILURE='SEARCH_WEATHER_FAILURE'
export const SEARCH_WEATHER_SUCCESS='SEARCH_WEATHER_SUCCESS'
export const FORECAST_WEATHER_SUCCESS='FORECAST_WEATHER_SUCCESS'
export const FORECAST_WEATHER_FAILURE='FORECAST_WEATHER_FAILURE'
export const FORECAST_WEATHER='FORECAST_WEATHER'
export const getWeather=(payload)=>({
    type:GET_WEATHER,
    payload
})
export const getWeatherSuccessAction=(payload)=>({
    type:GET_WEATHER_SUCCESS,
    payload
})
export const getWeather_FailureAction=(payload)=>({
    type:GET_WEATHER_FAILURE,
    payload
})
export const searchWeatherFailureAction=(payload)=>({
    type:SEARCH_WEATHER_FAILURE,
    payload
})
export const searchWeatherAction=(payload)=>({
    type:SEARCH_WEATHER,
    payload
})
export const searchWeatherSuccessAction=(payload)=>({
    type:SEARCH_WEATHER_SUCCESS,
    payload
})
export const forecastWeatherFailureAction=(payload)=>({
    type:FORECAST_WEATHER_FAILURE,
    payload
})
export const forecastWeatherAction=(payload)=>({
    type:FORECAST_WEATHER,
    payload
})
export const forecastWeatherSuccessAction=(payload)=>({
    type:FORECAST_WEATHER_SUCCESS,
    payload
})