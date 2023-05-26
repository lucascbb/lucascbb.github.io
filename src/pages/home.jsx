import Memoji from '../components/memoji';
import NavBar from '../components/navBar';
import React, { useState, useEffect } from 'react';
import LightMode from '../components/lightMode';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import '../styles/home.css';
import imgHome0 from '../images/homePage.jpg'
import imgHome1 from '../images/homePage2.png'

function Home() {
  const { light } = useContext(ThemeContext);
  const [nameProfile, setNameProfile] = useState("DESIGNER")

  const minhafuncao = () => {
    if (nameProfile === "DESIGNER") {
      setNameProfile("FRONT END")
    } else if (nameProfile === "FRONT END") {
      setNameProfile("BACK END")
    } else {
      setNameProfile("DESIGNER")
    }
  }

  setInterval(minhafuncao, 8000);

  const handleClick = () => {
    console.log('oi');
  };

  return (
    <div className="paidivBar">
      <img src={ imgHome1 } alt=''className="imgdivBar2" />
      <Memoji />
      <img src={ imgHome0 } alt=''className="imgdivBar" />
      <div className="divBar">
        <div className="divBarName">
          <h1 className="name1">HELLO EVERYBODY,</h1>
          <h1 className="name2">I`M LUCAS</h1>
          <h1 className="name3">BAROQUELLO</h1>
          <h1 className="name3">{ nameProfile }</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;