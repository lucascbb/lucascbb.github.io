import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import '../styles/aboutMe.css'

function AboutMe() {
  const { light } = useContext(ThemeContext)

  return (
    <div className='aboutmePai'>
        <h1 className='aboutmeTitle'>WHO I AM</h1>
        <p className='aboutmeText'>
        🧑‍💻 Sou uma pessoa apaixonada por tecnologia e programação, com 24 anos de idade, morando na capital de São Paulo e em transição de carreira. Atualmente estou estudando Desenvolvimento Web Full-Stack na Trybe, e buscando a minha oportunidade no mercado de trabalho como programador Fullstack júnior.
        </p>
        <p className='aboutmeText'>
        💡 Formado em marketing e cerca de 3 anos de experiência na prática, tenho uma vantagem única de trazer minha expertise em design, publicidade e marketing para a minha jornada atual na tecnologia.
        </p>
        <p className='aboutmeText'>
        🎮 Além disso, mantenho-me ativo com atividades como esportes, jogos eletrônicos, séries e momentos de lazer com amigos e familiares. Acredito que isso pode ser de grande ajuda para o meu desempenho em equipe no ambiente de trabalho e mantém a criatividade em meus projetos.
        </p>
        <p className='aboutmeText'>
        📚 E como estudante da Trybe, tenho a oportunidade única de imergir em projetos que imitam a vida real de um desenvolvedor. Isso me permite colocar em prática minhas habilidades adquiridas ao longo do curso, como: REACT, REDUX, JAVASCRIPT, HTML, CSS, JEST, CONTEXT API e muito mais. Além do uso das práticas ágeis Scrum e Kanban. Confira alguns desses projetos no meu Github: https://github.com/lucascbb
        </p>
        <p className='aboutmeText'>
        🙏 Gostaria de agradecer pela sua atenção e estou à disposição para conversarmos mais sobre minhas habilidades e como posso ajudar a sua empresa. Obrigado!
        </p>
    </div>
  )
}

export default AboutMe;