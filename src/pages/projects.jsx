import Memoji from '../components/memoji';
import NavBar from '../components/navBar';
import React, { useState, useEffect } from 'react';
import LightMode from '../components/lightMode';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

function Projects() {
  const { light } = useContext(ThemeContext);
  const [classProfile, setClassProfile] = useState("name4Designer")

  useEffect(() => {

    
  }, []);

  return (
    <div>
        
    </div>
  )
}

export default Projects;