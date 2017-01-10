import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'

import * as weatherActions from '../actions/weather';

export function* fetchWeather() {
  yield put(weatherActions.updateWeather(0, ''));
}

export function* watchFetchWeather() {
  yield takeEvery('FETCH_WEATHER', fetchWeather);
}

export default function* weatherSaga() {
  yield [
    watchFetchWeather()
  ]
}
