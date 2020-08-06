import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CLOUDS from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
import { Tab, Tabs } from 'react-bootstrap'




const App = () => {

  const [forecast, setForecast] = useState([]);
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  
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

    if (!vantaEffect) {
      setVantaEffect(CLOUDS({
        el: myRef.current,mouseControls: true,
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

  // const forecast = [{"_id":"5f20b82d1e62111674862b55","location":0,"place":"","result":"w"},{"_id":"5f20b8596fce7588f46c8a80","location":1,"place":"","result":"w"},{"_id":"5f20b8826fce7588f46c8a81","location":2,"place":"","result":"w"},{"_id":"5f20b89e6fce7588f46c8a82","location":3,"place":"QCL091","result":"s"},{"_id":"5f20b8c66fce7588f46c8a83","location":4,"place":"","result":"w"}];

  return (
    <div className="overflowauto" ref={myRef}>
      <div className="container overflowauto w-100 vh-100">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="#">
            <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
              ⛈ Emoji Forecast    
          </a>
        </nav>
        <div className="text-center pb-5"><h1 className=" display-1">Australia</h1></div>


        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            
          </div>
          <div className="col-md-auto">
            {forecast ? (
              <Tabs defaultActiveKey="today" id="forecast-time">
                <Tab eventKey="today" title="Rest of Today">
                  <div className="transparent card text-center pt-4 pb-3 keepsize">
                    {forecast.map((value) => {
                      if (value.result === 'b'){
                        return <p></p>
                      } else if (value.result === '🌊'){
                        return <a className="noBreak" title='wave'> {value.result} </a>
                      } else {
                        return <a className="noBreak" title={value.address}> {value.now} </a>
                      }
                    })}
                  </div>
                </Tab>
                <Tab eventKey="24hr" title="24hr">
                <div className="transparent card text-center pt-4 pb-3 keepsize">
                {forecast.map((value) => {
                      if (value.result === 'b'){
                        return <p></p>
                      } else if (value.result === '🌊'){
                        return <a className="noBreak" title='wave'> {value.result} </a>
                      } else {
                        return <a className="noBreak" title={value.address}> {value.twenty} </a>
                      }
                    })}
                  </div>
                </Tab>
                <Tab eventKey="48hr" title="48hr">
                <div className="transparent card text-center pt-4 pb-3 keepsize">
                {forecast.map((value) => {
                      if (value.result === 'b'){
                        return <p></p>
                      } else if (value.result === '🌊'){
                        return <a className="noBreak" title='wave'> {value.result} </a>
                      } else {
                        return <a className="noBreak" title={value.address}> {value.forty} </a>
                      }
                    })}
                  </div>
                </Tab>
              </Tabs>
              ) : (
                <div>
                  <p>Loading...</p>
                </div>
              )}
          </div>
          <div className="col col-lg-2">
            
          </div>
        </div>





        
         
        
        </div>
        
          
  
        
      </div>   
  );
}

export default App;
