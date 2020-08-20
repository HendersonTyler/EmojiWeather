import React, { useEffect, useState } from "react";
import {XYPlot, VerticalBarSeries, LabelSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries} from 'react-vis';
import 'react-vis/dist/style.css';

const Location = props => {
    const city = props.city;
    const [forecast, setForecast] = useState();

    useEffect(() => {
    fetch("http://localhost:8000/town/" + city )
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        return response.json();
    })
    .then(json => {
        setForecast(json);
        console.log(json)
    });        
    }, [city])

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function getDays(locationInArray){
        const fullDate = forecast['forecast-period'][locationInArray]['$']['start-time-local'];
        const date = new Date(fullDate)
        const numberOfDay = date.getDay();
        return weekday[numberOfDay];
    }

    function getRainChance(locationInArray){
        return forecast['forecast-period'][locationInArray]['text']['1']['_'].replace("%","")
    }

    function getEmoji(locationInArray){
        const fullForecast = forecast['forecast-period'][locationInArray]['text']['0']['_'].toLowerCase();
        if (fullForecast.includes('sunny')){
            return <span role='img' aria-label='sun' className="text-center">☀</span>;
        } else if (fullForecast.includes('shower')) {
            return <span role='img' aria-label='shower' className="text-center">🌦</span>;
        } else if (fullForecast.includes('storm')) {
            return <span role='img' aria-label='storm' className="text-center">⛈</span>;
        } else if (fullForecast.includes('rain')) {
            return <span role='img' aria-label='rain' className="text-center">☔</span>;
        } else if (fullForecast.includes('cloud')) {
            return <span role='img' aria-label='cloud' className="text-center">☁</span>;
        } else if (fullForecast.includes('fog')) {
            return <span role='img' aria-label='fog' className="text-center">🌫</span>;
        } else if (fullForecast.includes('frost')) {
            return <span role='img' aria-label='frost' className="text-center">❄</span>;
        } else if (fullForecast.includes('windy')) {
            return <span role='img' aria-label='wind' className="text-center">💨</span>;
        } else if (fullForecast.includes('dust')) {
            return <span role='img' aria-label='wind' className="text-center">🌵</span>;
        } else {
            return <span role='img' aria-label='thumb' className='text-center'>👎</span>
        }
    }
    
    

    return (
        <div>
            {forecast ? (
                <div>
                    <div className="text-center pb-5"><h1 className=" display-1">{ forecast['$']['description'] }</h1></div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Today</th>
                            <th scope="col">{ getDays(1) }</th>
                            <th scope="col">{ getDays(2) }</th>
                            <th scope="col">{ getDays(3) }</th>
                            <th scope="col">{ getDays(4) }</th>
                            <th scope="col">{ getDays(5) }</th>
                            <th scope="col">{ getDays(6) }</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"> {getEmoji(0)}</th>
                            <th scope="col">{ getEmoji(1) }</th>
                            <th scope="col">{ getEmoji(2) }</th>
                            <th scope="col">{ getEmoji(3) }</th>
                            <th scope="col">{ getEmoji(4) }</th>
                            <th scope="col">{ getEmoji(5) }</th>
                            <th scope="col">{ getEmoji(6) }</th>
                            </tr>
                        </tbody>
                    </table>

                    <div className="text-center pt-4"><h2>Chance of 🌧</h2></div>
                    <div>
                    <XYPlot animation
                        xType="ordinal"
                        width={900}
                        height={400}
                        yDomain={[0, 100]}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis title="chance of rain as %" />
                        <VerticalBarSeries data={[
                            {x: 'Today', y: getRainChance(0)},
                            {x: getDays(1), y: getRainChance(1)},
                            {x: getDays(2), y: getRainChance(2)},
                            {x: getDays(3), y: getRainChance(3)},
                            {x: getDays(4), y: getRainChance(4)},
                            {x: getDays(5), y: getRainChance(5)},
                            {x: getDays(6), y: getRainChance(6)}
                            ]} />
                        <LabelSeries />
                    </XYPlot>
                    </div>

                    <div className="text-center pt-4"><h2>🌡</h2></div>

                    <div>

                    <XYPlot width={300} height={300}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <LineSeries
                            style={{
                            strokeWidth: '3px'
                            }}
                            lineStyle={{stroke: 'red'}}
                            markStyle={{stroke: 'blue'}}
                            data={[{x: 1, y: 10}, {x: 2, y: 5}]}
                        />
                       
                    </XYPlot>
                    </div>

                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
    
}

export default Location;