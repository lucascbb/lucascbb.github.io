import React, { useState } from 'react';
import '../styles/lightMode.css';

function LightMode() {

  return (
    <div>
        <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
    </div>
  );
}

export default LightMode;