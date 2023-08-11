import { FORECAST_WEATHER_FAILURE,FORECAST_WEATHER_SUCCESS,GET_WEATHER_FAILURE, GET_WEATHER_SUCCESS, SEARCH_WEATHER_FAILURE, SEARCH_WEATHER_SUCCESS } from "./action";

const initialState = {
  list:[]
};

export const waetherReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WEATHER_SUCCESS: {
      return { ...state, ...payload };
    }
    case GET_WEATHER_FAILURE: {
      return { ...state, ...payload };
    }
    case SEARCH_WEATHER_SUCCESS: {
      return { ...state, ...payload };
    }
    case SEARCH_WEATHER_FAILURE: {
      return { ...state, ...payload };
    }
    case FORECAST_WEATHER_FAILURE: {
      return { ...state, ...payload };
    }
    case FORECAST_WEATHER_SUCCESS: {
      return { ...state, list:[...payload] };
    }
    default:
      return state;
  }
};
