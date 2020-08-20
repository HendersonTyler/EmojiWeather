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
        // console.log(forecast['forecast-period'][locationInArray]['text']['1']['_'])
        return forecast['forecast-period'][locationInArray]['text']['1']['_'].replace("%","")
    }

    function getLow(locationInArray){
        console.log(forecast['forecast-period'][locationInArray]['element']['1']['_'])
        return forecast['forecast-period'][locationInArray]['element']['1']['_']
    }

    function getHigh(locationInArray){
        // console.log(forecast['forecast-period'][locationInArray]['element']['2']['_'])
        return forecast['forecast-period'][locationInArray]['element']['2']['_']
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
                        <XAxis/>
                        <YAxis tickFormat={v => `${v}%`} />
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

                    <XYPlot width={900} height={300} xType="ordinal">
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis 
                            // tickFormat={(t, i) => {
                            //     if ((i % 2) === 0) {
                            //     return t.split(',')[0];
                            //     } else {
                            //     return;
                            //     }
                            // }} 
                            // style={{marginBottom: '50px'}} 
                            />
                        <YAxis 
                            // tickFormat={v => `${v}°C` }
                        />
                        <LineSeries
                            style={{
                            strokeWidth: '3px'
                            }}
                            // curve={'curveMonotoneX'}
                            // lineStyle={{stroke: 'red'}}
                            // markStyle={{stroke: 'blue'}}
                            data={[
                                {x: 'Today', y: getLow(0)}, 
                                {x: 'Tonight', y: getLow(1)}, 
                                {x: `${getDays(1)}`, y: getHigh(1)},
                                {x: `${getDays(1)} night`, y: getLow(2)},
                                {x: `${getDays(2)}`, y: getHigh(2)},
                                {x: `${getDays(2)} night`, y: getLow(3)},
                                {x: `${getDays(3)}`, y: getHigh(3)},
                                {x: `${getDays(3)} night`, y: getLow(4)},
                                {x: `${getDays(4)}`, y: getHigh(4)},
                                {x: `${getDays(4)} night`, y: getLow(5)},
                                {x: `${getDays(5)}`, y: getHigh(5)},
                                {x: `${getDays(5)} night`, y: getLow(6)},
                                {x: `${getDays(6)}`, y: getHigh(6)}
                            ]}
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