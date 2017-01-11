import React, { Component } from 'react';
import './App.css';

import WeatherDisplay from '../../containers/WeatherDisplay/WeatherDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Welcome to Kuala Lumpur</h2>
          <WeatherDisplay />
        </div>
      </div>
    );
  }
}

export default App;
