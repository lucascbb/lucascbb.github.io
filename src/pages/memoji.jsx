import emoji from '../images/semtitulo.png'
import olho1 from '../images/olho.png'
import olho2 from '../images/olho.png'
import React, { useEffect } from 'react';
import '../styles/memoji.css'

function Memoji() {
  useEffect(() => {
    document.getElementById('olho1').style.left = '370px'
    document.getElementById('olho1').style.top = '370px'
    document.getElementById('olho2').style.left = '185px'
    document.getElementById('olho2').style.top = '370px'
  },[])

  document.addEventListener('mousemove', function(e) {
    let x1 = e.clientX - 1130;
    let y1 = e.clientY - 170;
    if (x1 < 158) { x1 = 158 }
    if (x1 > 210) { x1 = 210 }
    if (y1 < 350) { y1 = 350 }
    if (y1 > 386) { y1 = 386 }
    document.getElementById('olho1').style.left = x1 + 'px'
    document.getElementById('olho1').style.top = y1 + 'px'

    let x2 = e.clientX - 1130;
    let y2 = e.clientY - 170;
    if (x2 < 350) { x2 = 350 }
    if (x2 > 400) { x2 = 400 }
    if (y2 < 350) { y2 = 350 }
    if (y2 > 386) { y2 = 386 }
    document.getElementById('olho2').style.left = x2 + 'px'
    document.getElementById('olho2').style.top = y2 + 'px'
  })

  return (
    <div className='paiMemoji'>
      <img src={ emoji } alt='' id='imagem' />
      <div>
        <img src={ olho1 } alt='' id='olho1' />
        <img src={ olho2 } alt='' id='olho2' />
      </div>
      <div className='fundoOlhos'></div>
    </div>
  )
}

export default Memoji;
