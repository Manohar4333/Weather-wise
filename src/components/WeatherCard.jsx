import React from 'react'
import avatar from "../assets/sun-cloud.svg"
import '../App.css'

const WeatherCard = ({weatherDetails}) => {
  return (
    <div className="weather-section">
      <div className="weather-card">

        <div className="weather-temp">
          <p>{weatherDetails.current.temp_c}<sup>o</sup> C </p>
          {/* <p>{weatherDetails.current.temp_f}<sup>o</sup> F</p> */}
        </div>

        <div className="weather-info">
          <span>🌈{weatherDetails.current.humidity} </span>
          <span> ☁️{weatherDetails.current.cloud}</span>
          {/* <p>{weatherDetails.current.temp_f}<sup>o</sup> F</p> */}
        </div>

        <div className="weather-place">
          {weatherDetails.location.name}, {weatherDetails.location.region}, {weatherDetails.location.country}
        </div>

        <div className="weather-avatar">
          <img src={avatar}  alt="" />
        </div>
      </div>

      {/* <p>weather</p> */}
      {/* console.log(weatherDetails); */}
      
    </div>
  )
}

export default WeatherCard