import React, { Component } from "react";

class Weather extends Component {

    render() {
        return(
            <div>
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Temperture: {this.props.temperture}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Conditions: {this.props.condition}</p>
                <p>Wind: Speed: {this.props.wind[0]}, Degree: {this.props.wind[1]}</p>
            </div>
        );
    }
}

export default Weather;