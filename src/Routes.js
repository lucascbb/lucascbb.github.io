import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Contact from "./pages/contact"
import AboutMe from "./pages/aboutMe";

class Routers extends React.Component {
    render() {
      return (
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/sobre" element={ <AboutMe /> } />
          <Route exact path="/contato" element={ <Contact /> } />
        </Routes>
      );
    }
}

export default Routers;