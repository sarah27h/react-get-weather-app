import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = '3b7d8b725e9415824bae9c91fae33399';

class App extends Component {

  componentDidMount() {

    // use async await approche to fetch data from openweathermap API
    // add async before our function
    const getWeather = async () => {

      // add await before make a call 
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=${API_KEY}`);

      // handle response using json() method to turn response into JSON
      const response = await api_call.json();
      console.log(response);
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
