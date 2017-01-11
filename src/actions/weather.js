export function updateWeatherSuccess(temperature, text) {
  return {
    type: 'UPDATE_WEATHER_SUCCESS',
    temperature,
    text,
  };
}

export function updateWeatherError() {
  return {
    type: 'UPDATE_WEATHER_ERROR',
  };
}
