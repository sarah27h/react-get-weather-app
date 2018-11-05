import React from "react";

function WeatherDetails(props) {
    return(
        
        <div className="weather-details">

            { 
                props.humidity && props.condition && props.wind[0] && props.wind[1] && 
                <div>
                    <p className="weather-data"><span className="weather-title">Humidity:</span> {props.humidity}</p> 
                    <p className="weather-data"><span className="weather-title">Conditions:</span> {props.condition}</p>
                    <p className="weather-data"><span className="weather-title">Wind:</span> Speed: {props.wind[0]}, Degree: {props.wind[1]}</p>
                </div>
            }

        </div>
    );
    
}

export default WeatherDetails;