import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      const response = await fetch("http://127.0.0.1:8000");
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
        } else {
          const json = await response.json();
          setForecast(json);
        }
    };
    getForecast();
  }, [])

  return (
    <div className="App container">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            ⛈ Emoji Forecast    
        </a>
      </nav>
      <div className="text-center pt-2"><h2>24 Australian Forecast</h2></div>
      
      {forecast ? (
        <div>
          {forecast.map((value) => {
            if (value === 'w'){
              return <span>🌊</span>;
            } else if (value === 's'){
              return <span>☀</span>
            } else if (value === 'b'){
              return <p></p>
            }
            
          })}
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
        
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
