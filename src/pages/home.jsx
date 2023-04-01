import Memoji from './memoji';
import NavBar from '../components/navBar';
import React from 'react';
import LightMode from '../components/lightMode';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

function Home() {
  const { light } = useContext(ThemeContext)
  return (
    <div>
      <LightMode />
      <NavBar />
      <Memoji/>
      <div className="divBar">
          <h1 className={ light ? "name1True" : "name1False" }>HELLO EVERYBODY,</h1>
          <h1 className={ light ? "name2True" : "name2False" }>I`M LUCAS</h1>
          <h1 className={ light ? "name3True" : "name3False" }>BAROQUELLO</h1>
      </div>
    </div>
  )
}

export default Home;