import Memoji from './memoji';
import NavBar from '../components/navBar';
import React from 'react';

function Home() {
  return (
    <div>
      <NavBar />
      <Memoji/>
      <div className="divBar">
          <h1 className="name1">HELLO EVERYBODY,</h1>
          <h1 className="name2">I`M LUCAS</h1>
          <h1 className="name3">BAROQUELLO</h1>
      </div>
    </div>
  )
}

export default Home;