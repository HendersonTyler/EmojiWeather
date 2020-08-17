import React, { useEffect, useState } from "react";

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


    return (
        <div>
            {forecast ? (
                <div className="text-center pb-5"><h1 className=" display-1">{ forecast.$.description }</h1></div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
    
}

export default Location;