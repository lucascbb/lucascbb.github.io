import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si'
import { MdEmail, MdCopyAll } from 'react-icons/md'
import { FiExternalLink } from 'react-icons/fi'
import gifContato from '../images/sent.gif'
import '../styles/contact.css'

function Home() {
  const { light } = useContext(ThemeContext)
  return (
    <div className='contactPai'>
        <div className='contactLeft'>
            <h1 className='titleContact'>Contact</h1>
            <div className='linkContact'>
                <h1 className='iconContact'><MdEmail className='iconCo'/>lucasbaroquello@hotmail.com</h1>
                <MdCopyAll />
            </div>
            <a  className='linkContact' href='https://api.whatsapp.com/send?phone=5511941139277&text=Ol%C3%A1,%20tudo%20bem?%20Encontrei%20seu%20contato%20atrav%C3%A9s%20do%20Github.%20Eu%20sou%20o/a%20(insira%20seu%20nome%20aqui'>
                <h1 className='iconContact'><SiWhatsapp className='iconCo'/>Whatsapp</h1>
                <FiExternalLink/>
            </a>
            <a className='linkContact' href='https://github.com/lucascbb'>
                <h1 className='iconContact'><SiGithub className='iconCo'/>Github</h1>
                <FiExternalLink/>
            </a>
            <a className='linkContact' href='https://www.linkedin.com/in/lucas-baroquello/'>
                <h1 className='iconContact'><SiLinkedin className='iconCo'/>Linkedin</h1>
                <FiExternalLink/>
            </a>
        </div>
        <div className='contactRight'>
            <img src={ gifContato } />
        </div>
    </div>
  )
}

export default Home;