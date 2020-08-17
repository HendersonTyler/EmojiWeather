import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Link } from '@reach/router';

const Home = () => {

  const [forecast, setForecast] = useState([]);
  
  useEffect(() => {
    const getForecast = async () => {
      const response = await fetch("http://sweet-source.bnr.la/forecast");
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
    <div>
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
                      return <div className="noBreak" title='wave'> {value.result} </div>
                    } else {
                      return <div className="noBreak" title={value.address}> <Link to={"/town/" + value.place} className="noBreak" > {value.now} </Link> </div>
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
                      return <div className="noBreak" title='wave'> {value.result} </div>
                    } else {
                      return <div className="noBreak" title={value.address}> {value.twenty} </div>
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
                      return <div className="noBreak" title='wave'> {value.result} </div>
                    } else {
                      return <div className="noBreak" title={value.address}> {value.forty} </div>
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
        
          
  
        
    
  );
}

export default Home;
