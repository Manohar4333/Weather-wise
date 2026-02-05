import React, { useState } from "react";
import axios from "axios";
import svg from "../assets/search.svg"
import '../App.css'

const Search = ({setWeatherDetails}) => {
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
    setWeatherDetails(null)
    // console.log(search);
  };
  console.log(import.meta.env.VITE_API_KEY);
  
  const handleKeyDown = async (e) => {
    if (e.key != "Enter") return;
  const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: search},
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
  setWeatherDetails(response.data)
} catch (error) {
	console.error(error);
}

  };
  console.log(search);

  return (
    <div className="search-section">
      <div className="search-container">
        <img className="svg" src={svg} alt="" />
        <input
          type="text"
          placeholder="search for a city"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default Search;
