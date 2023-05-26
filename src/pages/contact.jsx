import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si'
import { MdEmail, MdCopyAll } from 'react-icons/md'
import { FiExternalLink } from 'react-icons/fi'
import gifContato from '../images/sent.gif'
import '../styles/contact.css'

function Contato() {
    const { light } = useContext(ThemeContext)
    const handleClick = () => {
        navigator.clipboard.writeText('lucasbaroquello@hotmail.com');
        document.getElementById("copyEmail").innerHTML = "Email copied!";
        document.getElementById("copyEmail").style.backgroundColor = "white"
        setTimeout(function() {
            document.getElementById("copyEmail").innerHTML = ''
            document.getElementById("copyEmail").style.backgroundColor = "transparent"
          }, 4000);
    }

  return (
    <div className='contactPai'>
        <div className='contactLeft'>
            <h1 className='titleContact'>Contato</h1>
            <div className='emailContact'>
                <MdEmail className='iconEmailCo'/>
                <h1 className={ light ? 'emailLucasFalse' : 'emailLucasTrue' }>lucasbaroquello@hotmail.com</h1>
                <button onClick={ handleClick } className='btnCopyEmail'><MdCopyAll className='iconCopyEmail'/></button>
                <p id='copyEmail'></p>
            </div>
            <a className={ light ? 'linkContactFalse' : 'linkContactTrue' } href='https://www.linkedin.com/in/lucas-baroquello/'>
                <SiLinkedin className='iconCo'/>
                <h1 className='iconContact'>Linkedin</h1>
                <FiExternalLink className='iconLink'/>
            </a>
            <a className={ light ? 'linkContactFalse' : 'linkContactTrue' } href='https://api.whatsapp.com/send?phone=5511941139277&text=Ol%C3%A1,%20tudo%20bem?%20Encontrei%20seu%20contato%20atrav%C3%A9s%20do%20Github.%20Eu%20sou%20o/a%20(insira%20seu%20nome%20aqui'>
                <SiWhatsapp className='iconCo'/>
                <h1 className='iconContact'>Whatsapp</h1>
                <FiExternalLink className='iconLink'/>
            </a>
            <a className={ light ? 'linkContactFalse' : 'linkContactTrue' } href='https://github.com/lucascbb'>
                <SiGithub className='iconCo'/>
                <h1 className='iconContact'>Github</h1>
                <FiExternalLink className='iconLink'/>
            </a>
        </div>
        <div className='contactRight'>
            <img src={ gifContato } alt='' /> 
        </div>
    </div>
  )
}

export default Contato;