export function updateWeather(temperature, text) {
  return {
    type: 'UPDATE_WEATHER',
    temperature,
    text
  }
}
