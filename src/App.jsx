import './App.css'
import React, { useState } from 'react'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import Search from './components/Search'

const App = () => {
  const [weatherDetails,setWeatherDetails] = useState(null)
  return (
    <div className='app'>
      <div className="app-container">
        <Header/>
      <Search setWeatherDetails = {setWeatherDetails} />
      {weatherDetails && <WeatherCard weatherDetails = {weatherDetails} />}
      <Footer/>
      </div>
      

    </div>
  )
}

export default App