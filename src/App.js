import React, { useEffect, useState, useRef } from 'react';
import Home from './home';
import Location from './location';
import CLOUDS from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
import { Router, Link } from "@reach/router";


const App = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  
  useEffect(() => {
    document.title = "Emoji Forecast"

    if (!vantaEffect) {
      setVantaEffect(CLOUDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xffffff,
        midtoneColor: 0xc8c59d,
        lowlightColor: 0xffffff,
        baseColor: 0x6396f5,
        THREE: THREE,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }

    
  }, [vantaEffect])

  return (
    
      
    <div className="vh-100" ref={myRef}>
      <div className="container">
        <nav className="navbar navbar-light">
          <div className="navbar-brand">
            <Link to="">
              ⛈ Emoji Forecast   
              </Link> 
          </div>
        </nav>
          <Router>
            <Home path="/" />
            <Location path="/town/:city" />
          </Router>
      </div>
    </div>
    
        
  );
}

export default App;
