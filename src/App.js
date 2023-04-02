import React, { useState } from 'react';
import Routes from "./Routes"
import ThemeContext from '../src/context/ThemeContext';
import NavBar from '../src/components/navBar';
import LightMode from '../src/components/lightMode';

function App() {
  const [light, setLight] = useState(false);
  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      <LightMode />
      <NavBar />
      <Routes />
    </ThemeContext.Provider>
  );
}

export default App;
