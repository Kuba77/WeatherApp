import React from 'react';
import './App.css';

import WeatherDisplay from '../../containers/WeatherDisplay/WeatherDisplay';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to Kuala Lumpur</h2>
        <WeatherDisplay />
      </div>
    </div>
  );
}

export default App;
