import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import { useContext, useEffect } from 'react';
import "../styles/navBar.css"

function NavBar() {
    const { light } = useContext(ThemeContext);
    const location = useLocation();

    return (
        <nav className='navbarpai-nav'>
            <div className='namepai-nav'>
                <p className='lucas'>Lucas</p>
                <p className='baroquello'>Baroquello</p>
            </div>
            <ul className='linkspai-nav'>
                <Link to="/" className='link-nav'>
                    <li className={location.pathname === "/" ? 'liLink-nav-selected' : (light ? 'liLinkdark-nav' : 'liLinklight-nav')}>
                    {/* <li className={location.pathname === "/" ? 'liLink-nav-selected' : 'liLink-nav'}> */}
                        Home
                    </li>
                </Link>
                <Link to="/sobre" className='link-nav'>
                <li className={location.pathname === "/sobre" ? 'liLink-nav-selected' : (light ? 'liLinkdark-nav' : 'liLinklight-nav')}>
                        Sobre Mim
                    </li>
                </Link>
                <Link to="/contato" className='link-nav'>
                <li className={location.pathname === "/contato" ? 'liLink-nav-selected' : (light ? 'liLinkdark-nav' : 'liLinklight-nav')}>
                        Contato
                    </li>
                </Link>
                <Link to="/projetos" className='link-nav'>
                <li className={location.pathname === "/projetos" ? 'liLink-nav-selected' : (light ? 'liLinkdark-nav' : 'liLinklight-nav')}>
                        Projetos
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;