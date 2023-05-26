import React, { useState, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import '../styles/projects.css'

function Projects() {
  const { light } = useContext(ThemeContext);
  const [cards, setCards] = useState([
    {
        title: "Trybetunes",
        subtitle: "Um aplicativo de receitas de bebidas e comidas",
        stacks: "HTML, JS, CSS, REACT",
    },
    {
        title: "Trivia",
        subtitle: "Um aplicativo de receitas de bebidas e comidas",
        stacks: "HTML, JS, CSS, REACT",
    },
    {
        title: "Trybe Futebol",
        subtitle: "Um aplicativo de receitas de bebidas e comidas",
        stacks: "HTML, JS, CSS, DOCKER",
    },
    {
        title: "App de Receitas",
        subtitle: "Um aplicativo de receitas de bebidas e comidas",
        stacks: "HTML, JS, CSS, REACT",
    },
])

return (
    <div>
      <h1>PROJETOS</h1>
      <div className='avoCard'>
        {cards.map((ele) => {
            return (
            <div className='paiCard'>
                <h1 className='titleCard'>{ele.title}</h1>
                <p className='subtitleCard'>{ele.subtitle}</p>
                <p className='stacksCard'>{ele.stacks}</p>
            </div>
            );
        })}
      </div>
    </div>
  );
}

export default Projects;