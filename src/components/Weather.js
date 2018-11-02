import React from "react";

function Weather(props) {
    return(
        <div>
            {/* add conditional operator for only rendering data if user click submit btn */}
            { props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
            { props.temperture && <p>Temperture: {props.temperture}</p> }
            { props.humidity && <p>Humidity: {props.humidity}</p> }
            { props.condition && <p>Conditions: {props.condition}</p> }
            { props.wind[0] && props.wind[1] && <p>Wind: Speed: {props.wind[0]}, Degree: {props.wind[1]}</p> }
            {props.error && <p>{props.error}</p>}
        </div>
    );
}

export default Weather;