import { useContext } from 'react';
import '../styles/lightMode.css';
import ThemeContext from '../context/ThemeContext';

function LightMode() {
    const { light, setLight } = useContext(ThemeContext)

    const funcLight = () => {
        setLight (true);
        if (light) { setLight (false) }
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