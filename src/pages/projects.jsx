import React, { useState, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import '../styles/projects.css'
import image3 from '../images/trybetunes-Mockup3.png'
import image2 from '../images/trybetunes-Mockup2.png'
import image1 from '../images/trybetunes-Mockup.png'
import image0 from '../images/trybetunes-Mockup0.png'
import recipes0 from '../images/recipes-Mockup0.png'
import recipes1 from '../images/recipes-Mockup.png'
import recipes2 from '../images/recipes-Mockup2.png'
import recipes3 from '../images/recipes-Mockup3.png'
import planets0 from '../images/system-Mockup0.png'
import planets1 from '../images/system-Mockup.png'
import planets2 from '../images/system-Mockup2.png'
import planets3 from '../images/system-Mockup3.png'
import tfc0 from '../images/tfc-Mockup0.png'
import tfc1 from '../images/tfc-Mockup.png'
import tfc2 from '../images/tfc-Mockup2.png'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import docker from '../images/docker.png'
import mysql from '../images/mysql.png'
import express from '../images/express.png'
import sequelize from '../images/sequelize.png'
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { TbCircle } from "react-icons/tb"
import { TbCircleFilled } from "react-icons/tb"
import { GoLinkExternal } from "react-icons/go"
import imgHomeLight from '../images/homePage-light.png'
import imgHomeDark from '../images/homePage-Dark.png'

function Projects() {
  const { light } = useContext(ThemeContext);
  const [carousel, setCarousel] = useState(1);
  const [active, setActive] = useState(7);
  const [cards, setCards] = useState([
    {
      title: "Shopping Cart",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
    },
    {
      title: "Solar System",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
    },
    {
      title: "Star Wars",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
    },
    {
      title: "Pixel art",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
    },
    {
      title: "Solar System",
      subtitle: "Essa aplicação simula uma visualização do Sistema Solar, bem como informações sobre diversas missões espaciais que ocorreram ao longo da história.",
      stacks: [
        { img: react, name: "React" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
      ],
      linkProject: "https://lucascbb.github.io/solar-system/",
      linkCode: "https://github.com/lucascbb/solar-system",
      color: "#707273",
      backgroundImage0: `${planets0}`,
      backgroundImage: `${planets1}`,
      backgroundImage2: `${planets2}`,
      backgroundImage3: `${planets3}`,
    },
    {
      title: "Brasileirão ",
      subtitle: "Um projeto fullstack de um site informativo sobre partidas e classificações de futebol!",
      stacks: [
        { img: docker, name: "Docker" },
        { img: mysql, name: "MySQL" },
        { img: express, name: "Express.js" },
        { img: sequelize, name: "Sequelize" },
      ],
      linkProject: "https://lucascbb.github.io/recipes/",
      linkCode: "https://github.com/lucascbb/trybe-futebol-clube",
      color: "#464b32",
      backgroundImage0: `${tfc0}`,
      backgroundImage: `${tfc1}`,
      backgroundImage2: `${tfc2}`,
      backgroundImage3: `${recipes3}`,
    },
    {
      title: "Recipes App",
      subtitle: "Um aplicativo de receitas de bebidas e comidas. Nesse projeto, é possível procurar uma receita específica, favoritar e fazer as receitas.",
      stacks: [
        { img: react, name: "React" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
      ],
      linkProject: "https://lucascbb.github.io/recipes/",
      linkCode: "https://github.com/lucascbb/recipes",
      color: "#933b23",
      backgroundImage0: `${recipes0}`,
      backgroundImage: `${recipes1}`,
      backgroundImage2: `${recipes2}`,
      backgroundImage3: `${recipes3}`,
    },
    {
      title: "Trybetunes",
      subtitle: "Uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.",
      stacks: [
        { img: react, name: "React" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
      ],
      linkProject: "https://lucascbb.github.io/trybetunes/",
      linkCode: "https://github.com/lucascbb/trybetunes",
      color: "rgb(184, 118, 19)",
      backgroundImage0: `${image0}`,
      backgroundImage: `${image1}`,
      backgroundImage2: `${image2}`,
      backgroundImage3: `${image3}`,
    },
  ])

  useEffect(() => {
    document.getElementById(`divCard-${cards.length - 1}`).className = "paiCard-selected"
    document.getElementById(`titleCard-${cards.length - 1}`).className = "titleCard-selected"
    document.getElementById(`subtitleCard-${cards.length - 1}`).className = "subtitleCard-selected"
    document.getElementById(`stacksCard-${cards.length - 1}`).className = "stacksCard-selected"
    // document.getElementById(`imgCard-${cards.length - 1}`).className = "imgCard-selected"
    document.getElementById(`paiBtnsCard-${cards.length - 1}`).className = "paiBtnsCard-selected"
    document.getElementById(`paiCirclesCard-${cards.length - 1}`).className = "paiCirclesCard-selected"
    document.getElementById(`linkProjectPai-${cards.length - 1}`).className = "linkProjectPai-selected"
    document.getElementById(`rightBtnCard-${cards.length - 1}`).style.marginRight = "20px"
  }, []);

  const changeCard = (id, classe) => {
    if (document.getElementsByClassName("paiCard-selected")) {
      document.getElementsByClassName("paiCard-selected")[0].className = "paiCard"
      document.getElementsByClassName("titleCard-selected")[0].className = "titleCard"
      document.getElementsByClassName("subtitleCard-selected")[0].className = "subtitleCard"
      document.getElementsByClassName("stacksCard-selected")[0].className = "stacksCard"
      // document.getElementsByClassName("imgCard-selected")[0].className = "imgCard"
      document.getElementsByClassName("paiBtnsCard-selected")[0].className = "paiBtnsCard"
      document.getElementsByClassName("paiCirclesCard-selected")[0].className = "paiCirclesCard"
      document.getElementsByClassName("linkProjectPai-selected")[0].className = "linkProjectPai"
      document.getElementById(`titleCard-${cards.length - 1}`).style.left = "0px"
    }

    if (classe === "paiCard") { setCarousel(1) }
    setActive(id)

    document.getElementById(`divCard-${id}`).className = "paiCard-selected"
    document.getElementById(`titleCard-${id}`).className = "titleCard-selected"
    document.getElementById(`subtitleCard-${id}`).className = "subtitleCard-selected"
    document.getElementById(`stacksCard-${id}`).className = "stacksCard-selected"
    // document.getElementById(`imgCard-${id}`).className = "imgCard-selected"
    document.getElementById(`paiBtnsCard-${id}`).className = "paiBtnsCard-selected"
    document.getElementById(`paiCirclesCard-${id}`).className = "paiCirclesCard-selected"
    document.getElementById(`linkProjectPai-${id}`).className = "linkProjectPai-selected"
  }

  const handleLeft = (event) => {
    if (carousel > 1) {
      setCarousel(carousel - 1)
    } else { setCarousel(3) }
    event.stopPropagation()
  }

  const handleRight = (event) => {
    if (carousel < 3) {
      setCarousel(carousel + 1)
    } else { setCarousel(1) }
    event.stopPropagation()
  }

  return (
    <div>
      <div className='avoCard'>
        <img src={light ? imgHomeDark : imgHomeLight} alt='' className="imgdivBar2-home" />
        {cards.map((ele, i) => {
          return (
            <div
              className='paiCard'
              onClick={(e) => changeCard(i, e.currentTarget.className)}
              id={`divCard-${i}`} key={i}
              style={{
                backgroundImage: carousel === 1 && i === active ? `url(${ele.backgroundImage})` : carousel === 2 && i === active ? `url(${ele.backgroundImage2})` : carousel === 3 && i === active ? `url(${ele.backgroundImage3})` : `url(${ele.backgroundImage0})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // filter: 'blur(2px)',
                // filter: carousel === 1 && i === active ? `blur(0)` : carousel === 2 && i === active ? `blur(0)` : carousel === 3 && i === active ? `blur(0)` : 'blur(1px)',
              }}
            >
              <h1 className='titleCard' id={`titleCard-${i}`}>{ele.title}</h1>
              <div className='paiBtnsCard' id={`paiBtnsCard-${i}`}>
                <button className='leftBtnCard' id={`leftBtnCard-${i}`} onClick={handleLeft}><IoIosArrowDropleftCircle /></button>
                <button className='rightBtnCard' id={`rightBtnCard-${i}`} onClick={handleRight}><IoIosArrowDroprightCircle /></button>
              </div>
              <div className='stacksCard' id={`stacksCard-${i}`} style={carousel !== 1 ? { opacity: '0' } : null}>
                {ele.stacks.map((stack, index) => (
                  <div key={index} className='stacksCardteste'>
                    <img src={stack.img} alt={`Stack ${index + 1}`} width="80px" />
                    <span>{stack.name}</span>
                  </div>
                ))}
              </div>
              <p className='subtitleCard' id={`subtitleCard-${i}`} style={carousel !== 1 ? { opacity: '0' } : null}>{ele.subtitle}</p>
              {/* {carousel === 1 ? (
                <img src={ele.img1} alt="Imagem 1" className='imgCard' id={`imgCard-${i}`} />
              ) : carousel === 2 ? (
                <img src={ele.img2} alt="Imagem 2" className='imgCard' id={`imgCard-${i}`} />
              ) : (
                <img src={ele.img3} alt="Imagem 3" className='imgCard' id={`imgCard-${i}`} />
              )} */}
              <div className='linkProjectPai' id={`linkProjectPai-${i}`}>
                <a href={ele.linkProject} target="_blank" rel="noreferrer" className='btnLink' style={{ backgroundColor: ele.color }}>
                  <div className='linkProject'>
                    <p>Ver Projeto</p>
                    <GoLinkExternal />
                  </div>
                </a>
                <a href={ele.linkCode} target="_blank" rel="noreferrer" className='btnLink' style={{ backgroundColor: ele.color }}>
                  <div className='linkProject'>
                    <p>Ver Código</p>
                    <GoLinkExternal />
                  </div>
                </a>
              </div>
              <div className='paiCirclesCard' id={`paiCirclesCard-${i}`}>
                {carousel === 1 ? <TbCircleFilled /> : <TbCircle />}
                {carousel === 2 ? <TbCircleFilled /> : <TbCircle />}
                {carousel === 3 ? <TbCircleFilled /> : <TbCircle />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
