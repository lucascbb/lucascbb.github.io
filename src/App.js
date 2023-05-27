import React, { useState } from 'react';
import Routes from "./Routes"
import ThemeContext from '../src/context/ThemeContext';
import LightMode from '../src/components/lightMode';
import NavBar from '../src/components/navBar';

function App() {
  const [light, setLight] = useState(false);
  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      <NavBar />
      <LightMode />
      <Routes />
    </ThemeContext.Provider>
  );
}

export default App;
