import React, { Component } from "react";

class Weather extends Component {

    componentDidMount() {
        console.log('Weather componentDidMount');        
      }

    render() {

        console.log('Weather render');

        return(
            <div>
                {/* add conditional operator for only rendering data if user click submit btn */}
                { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                { this.props.temperture && <p>Temperture: {this.props.temperture}</p> }
                { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
                { this.props.condition && <p>Conditions: {this.props.condition}</p> }
                { this.props.wind[0] && this.props.wind[1] && <p>Wind: Speed: {this.props.wind[0]}, Degree: {this.props.wind[1]}</p> }
            </div>
        );
    }
}

export default Weather;