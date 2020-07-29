import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      const response = await fetch("http://127.0.0.1:8000/forecast");
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
        } else {
          const json = await response.json();
          setForecast(json);
        }
    };
    getForecast();
  }, [])

  // const forecast = [{"_id":"5f20b82d1e62111674862b55","location":0,"place":"","result":"w"},{"_id":"5f20b8596fce7588f46c8a80","location":1,"place":"","result":"w"},{"_id":"5f20b8826fce7588f46c8a81","location":2,"place":"","result":"w"},{"_id":"5f20b89e6fce7588f46c8a82","location":3,"place":"QCL091","result":"s"},{"_id":"5f20b8c66fce7588f46c8a83","location":4,"place":"","result":"w"}];

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
            if (value.result === 'w'){
              return <a id="wave" href="http://google.com">🌊</a>;
            } else if (value.result === 's'){
              return <span>☀</span>
            } else if (value.result === 'b'){
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
