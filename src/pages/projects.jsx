import React, { useState, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import '../styles/projects.css'
import image3 from '../images/trybetunes-Mockup3.png'
import image2 from '../images/trybetunes-Mockup2.png'
import image1 from '../images/trybetunes-Mockup.png'
import recipes1 from '../images/recipes-Mockup.png'
import recipes2 from '../images/recipes-Mockup2.png'
import recipes3 from '../images/recipes-Mockup3.png'
import tfc1 from '../images/tfc-Mockup.png'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
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
      title: "Trybetunes",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
    },
    {
      title: "Trivia",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
    },
    {
      title: "Trybe Futebol",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
    },
    {
      title: "Receitas",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
    },
    {
      title: "Trybetunes",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
    },
    {
      title: "Brasileirão ",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "Typescript" },
        { img: html, name: "React" },
      ],
      linkProject: "https://lucascbb.github.io/recipes/",
      linkCode: "https://github.com/lucascbb/recipes",
      color: "#933b23",
      backgroundImage: `${tfc1}`,
      backgroundImage2: `${recipes2}`,
      backgroundImage3: `${recipes3}`,
    },
    {
      title: "Recipes App",
      subtitle: "Um aplicativo de receitas de bebidas e comidas. Nesse projeto, é possível procurar uma receita específica, favoritar e fazer as receitas.",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: react, name: "React" },
      ],
      linkProject: "https://lucascbb.github.io/recipes/",
      linkCode: "https://github.com/lucascbb/recipes",
      color: "#933b23",
      backgroundImage: `${recipes1}`,
      backgroundImage2: `${recipes2}`,
      backgroundImage3: `${recipes3}`,
    },
    {
      title: "Trybetunes",
      subtitle: "Uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: react, name: "React" },
      ],
      linkProject: "https://lucascbb.github.io/trybetunes/",
      linkCode: "https://github.com/lucascbb/trybetunes",
      color: "rgb(184, 118, 19)",
      backgroundImage0: `${image1}`,
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
                backgroundImage: carousel === 1 && i === active ? `url(${ele.backgroundImage})` : carousel === 2 && i === active ? `url(${ele.backgroundImage2})` : carousel === 3 && i === active ? `url(${ele.backgroundImage3})` : `url(${ele.backgroundImage})`,
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat',
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
