import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import  { MdOutlineClose, MdContactMail } from 'react-icons/md'
import { HiHome } from 'react-icons/hi'
import { IoMdContact } from 'react-icons/io'
import { BsFileEarmarkCode } from 'react-icons/bs'

function NavBar() {
const [icon, setIcon] = useState(false)
const [classBar, setClassBar] = useState('nav')
const [classBtn, setClassBtn] = useState('btn')

const handleClick = () => {
  setClassBar('navTrue')
  setClassBtn('btnTrue')
  setIcon(true)
  if (classBar === 'navTrue') {  setClassBar('navFalse') }
  if (classBtn === 'btnTrue') {  setClassBtn('btnFalse') }
  if (icon) { setIcon(false) }
}

  return (
    <div className='paiNavBar'>
      <button  onClick={ handleClick } className={ classBtn }>
        {icon ? <MdOutlineClose/> : <RxHamburgerMenu/> }
        <div className='navBar1'></div>
        <div className='navBar2'></div>
        <div className='navBar3'></div>
      </button>
      <nav className={ classBar }>
        <ul className='links'>
          <li className='liLink'>
            <HiHome className='iconLink1'/>
            <Link to="/" className='linkNav'>Início</Link>
          </li>
          <li className='liLink'>
            <IoMdContact className='iconLink2'/>
            <Link to="/sobre" className='linkNav'>Sobre Mim</Link>
          </li>
          <li className='liLink'>
            <MdContactMail className='iconLink3'/>
            <Link to="/contato" className='linkNav'>Contato</Link>
          </li>
          <li className='liLink'>
            <BsFileEarmarkCode className='iconLink4'/>
            <Link to="/projetos" className='linkNav'>Projetos</Link>
          </li>
        </ul>
      </nav>
    </div> 
  );
}

export default NavBar;