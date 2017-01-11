import React, { PropTypes } from 'react';
import logo from './logo.svg';
import './WeatherDisplay.css';

function WeatherDisplay(props) {
  const { status, temperature, text } = props;

  if (status === 'INITIAL') {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }
  return (
    <div className="WeatherDisplay">
      <h1>{temperature}°C</h1>
      <h3>{text}</h3>
    </div>
  );
}

WeatherDisplay.propTypes = {
  status: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default WeatherDisplay;
