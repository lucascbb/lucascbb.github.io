import Memoji from '../components/memoji';
import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../styles/home.css';
import imgHome1light from '../images/homePage-light1.jpg'
import imgHome2light from '../images/homePage-light2.png'
import imgHome1dark from '../images/homePage-dark1.png'
import imgHome2dark from '../images/homePage-dark2.png'

function Home() {
  const { light } = useContext(ThemeContext);
  const [nameProfile, setNameProfile] = useState("DESIGNER")
  const [classe, setclasse] = useState("name3D-home")

  const minhafuncao = () => {
    if (nameProfile === "DESIGNER") {
      setclasse("name3F-home")
      setNameProfile("FRONT END")
    } else if (nameProfile === "FRONT END") {
      setclasse("name3B-home")
      setNameProfile("BACK END")
    } else {
      setclasse("name3D-home")
      setNameProfile("DESIGNER")
    }
  }

  setTimeout(minhafuncao, 4000)

  return (
    <>
    <div className="divHomePai-home">
      <Memoji />
      {/* <iframe src='https://my.spline.design/iphone14procopy-b81036445248c0db18611c43c726f197/' frameborder='0' width='100%' height='100%'></iframe> */}
      <img src={ light ? imgHome2dark : imgHome2light } alt=''className="imgdivBar2-home" />
      <img src={ light ? imgHome1dark : imgHome1light } alt=''className="imgdivBar-home" />
      <div className="divBar-home">
        <div className="divBarName-home">
          <h1 className={ light ? "name1light-home" : "name1dark-home" } >HI, I`M LUCAS</h1>
          <h1 className={ light ? "name2light-home" : "name2dark-home" }>BAROQUELLO</h1>
          <h1 className={ classe } >{ nameProfile }</h1>
          <div className='fundo-home' />
        </div>
        <div className="divBarPara-home">
          <p className="para-home">
            +1,5 ANO DE EXPERIENCIA EM DESENVOLVIMENTO WEB
          </p>
          <p className="para-home">
            +20 PROJETOS DESENVOLVIDOS (FRONT + BACK + FULL STACK)
          </p>
          <p className="para-home">
            +3 ANOS ATUANDO COMO DESIGNER E MARKETING
          </p>
        </div>
      </div>
    </div></>
  )
}

export default Home;