import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Contact from "./pages/contact"
<<<<<<< HEAD
import Projects from "./pages/projects";
=======
import AboutMe from "./pages/aboutMe";
>>>>>>> 08dce63a27e68744d70374b2dc7e1640173b2797

class Routers extends React.Component {
    render() {
      return (
        <Routes>
          <Route exact path="/" element={ <Home /> } />
<<<<<<< HEAD
          <Route exact path="/projetos" element={ <Projects /> } />
=======
          <Route exact path="/sobre" element={ <AboutMe /> } />
>>>>>>> 08dce63a27e68744d70374b2dc7e1640173b2797
          <Route exact path="/contato" element={ <Contact /> } />
        </Routes>
      );
    }
}

export default Routers;