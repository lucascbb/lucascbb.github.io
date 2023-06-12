import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { CiLight, CiDark } from 'react-icons/ci'
import { ImGithub, ImLinkedin, ImWhatsapp } from 'react-icons/im'
import '../styles/lightMode.css';

function LightMode() {
  const { light, setLight } = useContext(ThemeContext)

  const funcLight = () => {
    setLight(true);
    if (light) { setLight(false) }
  }

  return (
    <div className='lightMode'>
      <a href="https://api.whatsapp.com/send?phone=5511941139277&text=Ol%C3%A1,%20tudo%20bem?%20Encontrei%20seu%20contato%20atrav%C3%A9s%20do%20Portfolio.%20Eu%20sou%20o/a%20(insira%20seu%20nome%20aqui)." target="_blank" rel="noreferrer"><ImWhatsapp className='iconContact'/></a>
      <a href='https://www.linkedin.com/in/lucas-baroquello/' target='_blank' rel="noreferrer"><ImLinkedin className='iconContact'/></a>
      <a href='https://github.com/lucascbb' target='_blank' rel="noreferrer"><ImGithub className='iconContact'/></a>
      <label className="switch">
        <input type="checkbox" checked={light} onChange={funcLight} />
        <span className="slider round">{light ? <CiLight className='day' /> : <CiDark className='night' />}</span>
      </label>
    </div>
  );
}

export default LightMode;