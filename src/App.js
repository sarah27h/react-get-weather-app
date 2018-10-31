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

  // use - async await - approche to fetch data from openweathermap API
  // add async before our function
  fetchWeather = async (city, country) => {
    // add await before make a call
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${API_KEY}`);

    // handle response using json() method to turn response into JSON
    const response = await api_call.json();
    console.log(response);
    console.log(city, country);

    // update weather state after fetching data
    this.setState( {
      city: response.city.name,
      country: response.city.country,
      temperture : response.list[0].main.temp,
      humidity: response.list[0].main.humidity,
      condition: response.list[0].weather[0].description,
      wind: [response.list[0].wind.speed, response.list[0].wind.deg]
    });
  }

  // adding prevProps parameter corrected the multiple call issue
  componentDidUpdate(prevProps, prevState) {
    //a network request may not be necessary if the state have not changed
    if (this.state.cityInput !== prevState.cityInput && this.state.countryInput !== prevState.countryInput) {
      console.log('App componentDidUpdate');
      console.log(this.state.cityInput, prevState.cityInput);
    
      this.fetchWeather(this.state.cityInput, this.state.countryInput);
    }
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
