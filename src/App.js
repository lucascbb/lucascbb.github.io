import React, { useState } from 'react';
import Routes from "./Routes"
import ThemeContext from '../src/context/ThemeContext';

function App() {
  const [light, setLight] = useState(false);
  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      <Routes />
    </ThemeContext.Provider>
  );
}

export default App;
