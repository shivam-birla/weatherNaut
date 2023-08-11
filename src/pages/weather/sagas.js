import { put, takeLatest, call, } from 'redux-saga/effects';
import { searchWeatherDataApi, weatherDataApi,forecast } from '../../api';
import { FORECAST_WEATHER, GET_WEATHER, SEARCH_WEATHER, forecastWeatherFailureAction, forecastWeatherSuccessAction, getWeatherSuccessAction, getWeather_FailureAction, searchWeatherFailureAction, searchWeatherSuccessAction } from './action';


export function* getWeatherSaga(action){
    console.warn(action.payload);
    try {
        const response =yield call(weatherDataApi,action.payload) 
        console.warn(response);
        yield put(getWeatherSuccessAction(response))
    } catch (error) {
        yield put(getWeather_FailureAction(error.message))
  
    }
}
export function* searchWeatherSaga(action){
  
    try {
        const response =yield call(searchWeatherDataApi,action.payload) 
        console.warn(response);
        yield put(searchWeatherSuccessAction(response))
    }
     catch (error) {
        console.warn(error);
        yield put(searchWeatherFailureAction(error.message))
    }
}
export function* forecastWeatherSaga(action){
    console.warn(action.payload);
    try {
        const response =yield call(forecast,action.payload) 
        console.warn(response);
        yield put(forecastWeatherSuccessAction(response.list))
    }
     catch (error) {
        console.warn(error);
        yield put(forecastWeatherFailureAction(error.message))
    }
}
export default [takeLatest(GET_WEATHER,getWeatherSaga),
takeLatest(SEARCH_WEATHER,searchWeatherSaga),
takeLatest(FORECAST_WEATHER,forecastWeatherSaga)]