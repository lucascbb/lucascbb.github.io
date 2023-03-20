import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";

class Routers extends React.Component {
    render() {
      return (
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      );
    }
}

export default Routers;