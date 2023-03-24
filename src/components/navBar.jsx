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
          <Link to="/" className='linkNav'>
            <li className='liLink'>
              <HiHome className='iconLink1'/>
              Início
            </li>
          </Link>
          <Link to="/sobre" className='linkNav'>
            <li className='liLink'>
              <IoMdContact className='iconLink2'/>
            Sobre Mim
            </li>
          </Link>
          <Link to="/contato" className='linkNav'>
            <li className='liLink'>
              <MdContactMail className='iconLink3'/>
            Contato
            </li>
          </Link>
          <Link to="/projetos" className='linkNav'>
            <li className='liLink'>
              <BsFileEarmarkCode className='iconLink4'/>
              Projetos
            </li>
          </Link>
        </ul>
      </nav>
    </div> 
  );
}

export default NavBar;