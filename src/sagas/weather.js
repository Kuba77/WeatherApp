import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'

import * as weatherActions from '../actions/weather';
import * as api from '../services/api';

export function* fetchWeather() {
  const { response, error } = yield call(api.fetchWeather);
  if (response) {
    const temperature = response.condition.temp;
    const text = response.condition.text;
    yield put(weatherActions.updateWeatherSuccess(temperature, text));
  }
  else if (error) {
    console.error(error);
    yield put(weatherActions.updateWeatherError());
  }
}

export function* watchFetchWeather() {
  yield takeEvery('FETCH_WEATHER', fetchWeather);
}

export default function* weatherSaga() {
  yield [
    watchFetchWeather()
  ]
}
