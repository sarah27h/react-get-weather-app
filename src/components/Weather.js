import React from "react";

function Weather(props) {
    return(
        <div className="weather-wrapper">
            {/* add conditional operator for only rendering data if user click submit btn */}

            { 
                props.city && props.country  && props.temperture && 
                <div className="main-data">
                    <p className="temp">{props.temperture}<sup className="degree">o</sup></p>
                    <div className="vertical-line"></div>
                    <p className="location"> {props.city}, {props.country}</p>
                </div>

            }

            { props.icon && <img className="weather-icon" src={`https://openweathermap.org/img/w/${props.icon}.png`} />}

            {props.error && <p>{props.error}</p>}

        </div>
    );
}

export default Weather;