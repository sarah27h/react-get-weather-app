import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = '3b7d8b725e9415824bae9c91fae33399';

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temperture: undefined,
    humidity: undefined,
    condition: undefined,
    wind: [undefined,undefined]
  }

  componentDidMount() {

    // use async await approche to fetch data from openweathermap API
    // add async before our function
    const getWeather = async () => {

      // add await before make a call 
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Paris,France&units=metric&APPID=${API_KEY}`);

      // handle response using json() method to turn response into JSON
      const response = await api_call.json();
      console.log(response);

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

    getWeather();
    
  }


  render() {
    return (
      <div className="App">
      
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
