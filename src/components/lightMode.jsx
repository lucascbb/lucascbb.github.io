import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { CiLight, CiDark } from 'react-icons/ci'
import '../styles/lightMode.css';

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
            <span className="slider round">{light ? <CiLight className='day'/> : <CiDark className='night'/> }</span>
        </label>
    </div>
  );
}

export default LightMode;