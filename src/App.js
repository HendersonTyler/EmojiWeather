import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const forecast = ['w', 'w', 'w', 's', 'w']

  return (
    <div className="App container">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            ⛈ Emoji Forecast    
        </a>
      </nav>
      <div className="text-center pt-2"><h2>24 Australian Forecast</h2></div>
      
      <div>
        {forecast.map((value) => {
          if (value === 'w'){
            return <span>🌊</span>;
          } else if (value === 's'){
            return <span>☀</span>
          }
          
        })}
        </div>
        
        {/* <div className="pt-5">
          <p>🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊</p>
          <p>🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊☀🌊🌊🌊🌊🌊🌊</p>
          <p>🌊🌊🌊🌊🌊🌊☀☀🌊🌊🌊🌊🌊☀☀🌊🌊🌊🌊🌊</p>
          <p>🌊🌊🌊🌊☀☀☀☀☀☀☀🌊🌊☀☀☀🌊🌊🌊🌊</p>
          <p>🌊🌊☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀🌊🌊🌊</p>
          <p>🌊☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀🌊🌊</p>
          <p>🌊☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀🌊</p>
          <p>🌊☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀🌊🌊</p>
          <p>🌊🌊☀☀☀☀☀☀☀☀☀☀☀☀☀☀☀🌊🌊🌊</p>
          <p>🌊🌊🌊🌊☀☀☀🌊☀☀☀☀☀☀☀☀🌊🌊🌊🌊</p>
          <p>🌊🌊🌊🌊🌊☀🌊🌊🌊🌊🌊🌊☀☀☀🌊🌊🌊🌊🌊</p>
          <p>🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊</p>
          <p>🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊☀🌊🌊🌊🌊🌊🌊</p>
          <p>🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊</p>
        </div> */}
      </div>
   
  );
}

export default App;
