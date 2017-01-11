import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';

function WeatherDisplayContainer(props) {
  const { status, temperature, text } = props;
  return <WeatherDisplay status={status} temperature={temperature} text={text} />;
}

WeatherDisplayContainer.propTypes = {
  status: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    status: state.weather.status,
    temperature: state.weather.temperature,
    text: state.weather.text,
  };
}

export default connect(mapStateToProps, undefined)(WeatherDisplayContainer);
