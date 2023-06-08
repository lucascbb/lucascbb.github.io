import React, { useState, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import '../styles/projects.css'
import image6 from '../images/imgCard-6.png'
import image7 from '../images/trybetunes-Mockup.png'
import gif1 from '../images/laptop-mockup.png'
import gif2 from '../images/iphone-mockup.png'
import gif3 from '../images/Trybetunes.png'
import gi14 from '../images/laptop-mockup2.png'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
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
      // backgroundImage: `${image7}`,
      img1: gif1,
      img2: gif2,
      img3: gif3,
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
      // backgroundImage: `${image7}`,
      img1: gif1,
      img2: gif2,
      img3: gif3,
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
      // backgroundImage: `${image7}`,
      img1: gif1,
      img2: gif2,
      img3: gif3,
    },
    {
      title: "App de Receitas",
      subtitle: "Um aplicativo de receitas de bebidas e comidas",
      stacks: [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: html, name: "React" },
      ],
      // backgroundImage: `${image7}`,
      img1: gif1,
      img2: gif2,
      img3: gif3,
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
      // backgroundImage: `${image7}`,
      img1: gif1,
      img2: gif2,
      img3: gif3,
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
      // backgroundImage: `${image7}`,
      img1: gif1,
      img2: gif2,
      img3: gif3,
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
      // backgroundImage: `${image6}`,
      img1: gi14,
      img2: gif2,
      img3: gif3,
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
      linkProject: "www.google.com",
      linkCode: "www.google.com",
      backgroundImage: `${image7}`,
      // img1: gif1,
      // img2: gif2,
      // img3: gif3,
    },
  ])

  useEffect(() => {
    document.getElementById(`divCard-${cards.length - 1}`).className = "paiCard-selected"
    document.getElementById(`titleCard-${cards.length - 1}`).className = "titleCard-selected"
    document.getElementById(`subtitleCard-${cards.length - 1}`).className = "subtitleCard-selected"
    document.getElementById(`stacksCard-${cards.length - 1}`).className = "stacksCard-selected"
    document.getElementById(`imgCard-${cards.length - 1}`).className = "imgCard-selected"
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
      document.getElementsByClassName("imgCard-selected")[0].className = "imgCard"
      document.getElementsByClassName("paiBtnsCard-selected")[0].className = "paiBtnsCard"
      document.getElementsByClassName("paiCirclesCard-selected")[0].className = "paiCirclesCard"
      document.getElementsByClassName("linkProjectPai-selected")[0].className = "linkProjectPai"
      document.getElementById(`titleCard-${cards.length - 1}`).style.left = "0px"
    }

    if (classe === "paiCard") { setCarousel(1) }

    document.getElementById(`divCard-${id}`).className = "paiCard-selected"
    document.getElementById(`titleCard-${id}`).className = "titleCard-selected"
    document.getElementById(`subtitleCard-${id}`).className = "subtitleCard-selected"
    document.getElementById(`stacksCard-${id}`).className = "stacksCard-selected"
    document.getElementById(`imgCard-${id}`).className = "imgCard-selected"
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
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 15%, rgba(77,100,134,0) 100%), url(${ele.backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h1 className='titleCard' id={`titleCard-${i}`}>{ele.title}</h1>
              <div className='stacksCard' id={`stacksCard-${i}`}>
                {ele.stacks.map((stack, index) => (
                  <div key={index} className='stacksCardteste'>
                    <img src={stack.img} alt={`Stack ${index + 1}`} width="80px" />
                    <span>{stack.name}</span>
                  </div>
                ))}
              </div>
              <p className='subtitleCard' id={`subtitleCard-${i}`}>{ele.subtitle}</p>
              {carousel === 1 ? (
                <img src={ele.img1} alt="Imagem 1" className='imgCard' id={`imgCard-${i}`} />
              ) : carousel === 2 ? (
                <img src={ele.img2} alt="Imagem 2" className='imgCard' id={`imgCard-${i}`} />
              ) : (
                <img src={ele.img3} alt="Imagem 3" className='imgCard' id={`imgCard-${i}`} />
              )}
              <div className='paiBtnsCard' id={`paiBtnsCard-${i}`}>
                <button className='leftBtnCard' id={`leftBtnCard-${i}`} onClick={handleLeft}><IoIosArrowDropleftCircle /></button>
                <button className='rightBtnCard' id={`rightBtnCard-${i}`} onClick={handleRight}><IoIosArrowDroprightCircle /></button>
              </div>
              <div className='linkProjectPai' id={`linkProjectPai-${i}`}>
                <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer" className='btnLink'>
                  <div className='linkProject'>
                    <p>Ver Projeto</p>
                    <GoLinkExternal />
                  </div>
                </a>
                <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer" className='btnLink'>
                  <div className='linkProject'>
                    <p>Ver Code</p>
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
