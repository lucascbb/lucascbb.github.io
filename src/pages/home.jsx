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
      <Memoji/>
      <div className="divBar">
        <div className="divBarName">
            <h1 className="name1">HELLO EVERYBODY,</h1>
            <h1 className="name2">I`M LUCAS</h1>
            <h1 className="name3">BAROQUELLO</h1>
            {/* <h1 className="name3">A DESIGNER</h1> */}
            <h1 className="name4">A FRONT-END DEVELOPER.</h1>
          </div>
      </div>
    </div>
  )
}

export default Home;