import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = '3b7d8b725e9415824bae9c91fae33399';

class App extends Component {

  state = {
    cityInput: undefined,
    countryInput: undefined,
    city: undefined,
    country: undefined,
    temperture: undefined,
    humidity: undefined,
    condition: undefined,
    wind: [undefined,undefined]
  }

  //to get location from <Form /> (user inputs)
  getLocations = (city, country) => {
    // update location state due to user inputs
    this.setState({
      cityInput: city, countryInput: country
    })
    
  }

  render() {
    console.log('App render');
    return (
      <div className="App">
      
        <Titles />
        <Form onSubmit={this.getLocations} />
        <Weather 
          city={this.state.city}
          country={this.state.country}
          temperture={this.state.temperture}
          humidity={this.state.humidity}
          condition={this.state.condition}
          wind={this.state.wind}
        />
      </div>
    );
  }
}

export default App;
