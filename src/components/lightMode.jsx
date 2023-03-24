import React, { useState } from 'react';
import '../styles/lightMode.css';

function LightMode() {
    const [light, setLight] = useState(false)

    const funcLight = () => {
        setLight(true);
        if (light) { setLight(false) }
    }

  return (
    <div>
        <label className="switch">
            <input type="checkbox" checked={ light } onChange={ funcLight } />
            <span className="slider round"></span>
        </label>
    </div>
  );
}

export default LightMode;