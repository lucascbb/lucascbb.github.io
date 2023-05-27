import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineClose, MdContactMail } from 'react-icons/md'
import { HiHome } from 'react-icons/hi'
import { IoMdContact } from 'react-icons/io'
import { BsFileEarmarkCode } from 'react-icons/bs'
import ThemeContext from '../context/ThemeContext';
import { useContext, useEffect } from 'react';
import "../styles/navBar.css"

function NavBar() {
    return (
        <nav className='pai'>
            <div className='lucasBaroquello'>
                <p className='lucas'>Lucas</p>
                <p className='baroquello'>Baroquello</p>
            </div>
            <ul className='links'>
                <Link to="/" className='linkNav'>
                    <li className='liLink'>
                        {/* <HiHome className='iconLink1'/> */}
                        Home
                    </li>
                </Link>
                <Link to="/sobre" className='linkNav'>
                    <li className='liLink'>
                        {/* <IoMdContact className='iconLink2'/> */}
                        Sobre Mim
                    </li>
                </Link>
                <Link to="/contato" className='linkNav'>
                    <li className='liLink'>
                        {/* <MdContactMail className='iconLink3'/> */}
                        Contato
                    </li>
                </Link>
                <Link to="/projetos" className='linkNav'>
                    <li className='liLink'>
                        {/* <BsFileEarmarkCode className='iconLink4'/> */}
                        Projetos
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;