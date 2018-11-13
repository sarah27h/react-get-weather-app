import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import WeatherDetails from './components/WeatherDetails'
import {COUNTRIES_OPTIONS} from './data/ISO_CountryList'

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
    icon: undefined,
    wind: [undefined,undefined],
    error: undefined,
    displayComponent: false,
    countryList: []
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
    try {
      // add await before make a call
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${API_KEY}`);

      // handle response using json() method to turn response into JSON
      const response = await api_call.json();
      console.log(response);
      console.log(city, country);
      console.log(response.message);
      
      // handle case: data is fecthed correctly
      if (response.cod === "200") {
        // update weather state after fetching data
        this.setState( {
          city: response.city.name,
          country: response.city.country,
          temperture : response.list[0].main.temp,
          humidity: response.list[0].main.humidity,
          condition: response.list[0].weather[0].description,
          icon: response.list[0].weather[0].icon,
          wind: [response.list[0].wind.speed, response.list[0].wind.deg],
          error: undefined,
          displayComponent: true
        });
        // handle case: user enter incorrect location
        // simulate case: enter wrong locations
       } else if (response.cod === "404") {
          this.setState({
            error : `${response.message}, please check location inputs again`,
            cityInput: undefined,
            countryInput: undefined,
            city: undefined,
            country: undefined,
            temperture: undefined,
            humidity: undefined,
            condition: undefined,
            icon: undefined,
            wind: [undefined,undefined],
            displayComponent: true
           });

        } else {
        // handle case: if invalid API openweathermap key (Unauthorized error)
        // if (response.cod === "401")
        // simulate case: delete from API key
          this.setState({
            error : response.message,
            cityInput: undefined,
            countryInput: undefined,
            city: undefined,
            country: undefined,
            temperture: undefined,
            humidity: undefined,
            condition: undefined,
            icon: undefined,
            wind: [undefined,undefined],
            displayComponent: true
          });
          
        }

    //handle case: if fetch request fails due to network issues or fetched url incorrect
    // User is offline, DNS troubles, network errors
    // simulate case: disconnect internet or delete anything from fetched url
    } catch (error) {
      this.setState({
        cityInput: undefined,
        countryInput: undefined,
        city: undefined,
        country: undefined,
        temperture: undefined,
        humidity: undefined,
        condition: undefined,
        icon: undefined,
        wind: [undefined,undefined],
        displayComponent: true,
        error : 'Error: something went wrong with network' });
    }
  
  } 

  componentDidMount() {
    console.log('App  componentDidMount')
    this.setState({ countryList : COUNTRIES_OPTIONS }, 
      () => console.log(this.state.countryList));
  }

  // adding prevProps parameter corrected the multiple call issue
  componentDidUpdate(prevProps, prevState) {
    //a network request may not be necessary if the state (locations user enterd) have not changed
    if (this.state.cityInput !== prevState.cityInput || this.state.countryInput !== prevState.countryInput) {
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
        <Form 
          onSubmit={this.getLocations}
          countryList={this.state.countryList}
        />
        <Weather 
          city={this.state.city}
          country={this.state.country}
          temperture={this.state.temperture}
          humidity={this.state.humidity}
          condition={this.state.condition}
          icon={this.state.icon}
          wind={this.state.wind}
          error={this.state.error}
          displayComponent={this.state.displayComponent}
        />

        <WeatherDetails 
          humidity={this.state.humidity}
          condition={this.state.condition}
          wind={this.state.wind}
          displayComponent={this.state.displayComponent}
        />

      </div>
    );
  }
}

export default App;
