import { combineReducers } from 'redux';
import { waetherReducer } from '../pages/weather/reducer';
export default combineReducers({
 weather:waetherReducer
});
