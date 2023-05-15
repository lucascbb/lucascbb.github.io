import Memoji from '../components/memoji';
import NavBar from '../components/navBar';
import React, { useState, useEffect } from 'react';
import LightMode from '../components/lightMode';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

function Home() {
  const { light } = useContext(ThemeContext);
  const [classProfile, setClassProfile] = useState("name4Designer")
  const [nameProfile, setNameProfile] = useState("DESIGNER")

  useEffect(() => {
    const fonts = ["Arial", "cursive", "Poiret One, cursive","Barrio, cursive", "Silkscreen, cursive", "Single Day, cursive",  "Special Elite, cursive", "Calibri"];
    const selectedFont = fonts[Math.floor(Math.random() * fonts.length)]
    document.querySelector(".name1").style.fontFamily = selectedFont;
    document.querySelector(".name2").style.fontFamily = selectedFont;
    document.querySelector(".name3").style.fontFamily = selectedFont;
    if (document.querySelector(".name4Front")) {
      document.querySelector(".name4Front").style.fontFamily = selectedFont;
    }
    if (document.querySelector(".name4Designer")) {
      document.querySelector(".name4Designer").style.fontFamily = selectedFont;
    }
    
  }, []);

  const minhafuncao = () => {
    if (nameProfile === "DESIGNER") {
      setNameProfile("FRONT END")
      setClassProfile("name4Front")
    } else if (nameProfile === "FRONT END") {
      setNameProfile("BACK END")
      setClassProfile("name4Back")
    } else {
      setNameProfile("DESIGNER")
      setClassProfile("name4Designer")
    }
  }

  setInterval(minhafuncao, 8000);

  return (
    <div>
      <Memoji />
      <div className="divBar">
        <div className="divBarName">
          <h1 className="name1">HELLO EVERYBODY,</h1>
          <h1 className="name2">I`M LUCAS</h1>
          <h1 className="name3">BAROQUELLO</h1>
          <h1 className={classProfile}>{nameProfile}</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;