import React, { Component } from 'react';
import Search from './components/Search/Search';
import WeatherReport from './components/Weather/WeatherReport';
import axios from 'axios';
import classes from './App.css';

const apiKey = '38dd5648930ac0da8d0c6d4d20957fc4';

class App extends Component {
  state = {
        city: "texas",
        country : "us",
        description : "",
        humidity : undefined
  }

  onInputCityHandler = (city) =>{
    this.setState({city})
  }
  onInputCountryHandler = (country) =>{
    this.setState({country})
  }

   grabWeather = async (city,country) =>{
     try{
    const result = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${city},${country}`)
    console.log(result)
    const data = result.data;
    this.setState({
      description : data.weather[0].description,
      humidity: data.main.humidity
    })
  }
  catch(error){
    alert('Please enter valid values to the input fields', error);
  }
}
   
  componentDidMount() {
    this.grabWeather(this.state.city, this.state.country)
  }
  
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Bg}> 
          <h1>Weather Report</h1>
        </div>
        <Search onInputCity={this.onInputCityHandler} 
        onInputCountry ={this.onInputCountryHandler}
        city = {this.state.city}
        country = {this.state.country}
        weather = {() => this.grabWeather(this.state.city, this.state.country)}/>
        <WeatherReport 
        city ={this.state.city} 
        country ={this.state.country}
        description ={this.state.description} 
        humidity = {this.state.humidity}/>
      </div>
    );
  }
}

export default App;
