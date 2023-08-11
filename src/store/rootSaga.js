import { all } from 'redux-saga/effects';
import weatherSaga from '../pages/weather/sagas'
export default function* rootSaga() {
  yield all([
...weatherSaga
  ]);
}
