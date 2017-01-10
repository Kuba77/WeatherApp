import 'isomorphic-fetch'

const ENDPOINT = 'https://query.yahooapis.com/v1/public/';
const KL_WOEID = 1154781;

export function constructURL(query) {
  return `${ENDPOINT}yql?q=${query}&format=json`
}

export function callApi(query) {
  const url = constructURL(query);
  return fetch(
    url,
    {
      method: 'get'
    }
  ).then(
    response => response.json()
  ).then(
    json => json.query.results.channel.item
  ).then(
    response => ({ response }),
    error => ({ error: error.message || 'Undefined error' })
  );
}

export function fetchWeather() {
  const query = `select item.condition from weather.forecast where woeid = ${KL_WOEID} and u='c'`;
  return callApi(query);
}
