import React from 'react';
import Axios from 'axios';
import Navbar from './component/navbar'
import Display from './component/display'
import './App.css';
class App extends React.Component {
  state = {
    location: {
      latitude: 50,
      longitude: 50
    },
    weather:{},
    input:''
  }
  componentDidMount()
  {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(position=>{
        let location1={
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        }
        this.setState({location:location1})
      })
      Axios.get(`http://api.weatherstack.com/current?access_key=ee2c00a09ba65e4467143d28625d3fa2&query=${this.state.location.latitude},${this.state.location.longitude}`)
      .then(res => {

        let userWeather = {
          temperature: res.data.current.temperature,
          description: res.data.current.weather_descriptions[0],
          location: res.data.location.name,
          region: res.data.location.region,
          country: res.data.location.country,
          wind_speed: res.data.current.wind_speed,
          pressure: res.data.current.pressure,
          precip: res.data.current.precip,
          humidity: res.data.current.humidity,
          img: res.data.current.weather_icons
        }
        this.setState({ weather: userWeather });
        console.log(this.state.weather)
      })
    }
  }
  changeInput=(value)=>
  {
      this.setState({input:value})
  }
  onChangeLocation = (e) => {

    e.preventDefault()

    Axios.get(`http://api.weatherstack.com/current?access_key=ee2c00a09ba65e4467143d28625d3fa2&query=${this.state.input}`).then(res => {

      let userWeather = {
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        location: res.data.location.name,
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons
      }

      this.setState({ weather: userWeather });
      console.log(this.state.weather)

    })
  }

  

  render() {
    return (
      <div classname='app'>
        <div className="container">
        <Navbar changeInput={this.changeInput} onChangeLocation={this.onChangeLocation}/>
        <Display weather={this.state.weather}/>
        </div>
      </div>
    )
  }
}


export default App;
