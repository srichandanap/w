import React, { useState, useEffect } from 'react';
// import { NavLink, Route, Routes } from "react-router-dom";
import './home.css';
import { useDispatch } from 'react-redux';
// import { addTemperature } from '../redux/weatherSlice';
// import { addText } from '../redux/weatherSlice';
import { addWeather } from '../redux/weatherSlice'
import axios from 'axios';
// import { addPlace } from '../redux/weatherSlice'
import { addWeatherData } from '../redux/weatherSlice';

const Home = () => {
  const [search, setSearch] = useState('udupi');
  const [place, setPlace] = useState([]);
  const [country, setCountry] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [text, setText] = useState([]);
  const [weather, setWeather] = useState([]);
  const dispatch = useDispatch();

  // const [menuMobile, setMenuMobile] = useState(false)
  // const [searchMobile, setSearchMobile] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearch(e.target.search.value);

  }

  // useEffect(() => {
  //   dispatch(addPlace(place));
  // }, [place]);
  // // console.log(place, country, temperature, text);


  // useEffect(() => {
  //   dispatch(addCountry(country));
  // }, [country]);

  useEffect(() => {
    dispatch(addWeatherData({
      place: place,
      country: country,
      temperature: temperature,
      text: text,
    }));
  }, [weather]);


  // useEffect(() => {
  //   dispatch(addTemperature(temperature));
  // }, [temperature]);

  // useEffect(() => {
  //   dispatch(addText(text));
  // }, [text]);



  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8dd658552bmsh9bf45dd766ebaf7p1140dejsn7b9c838d2044',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };
  const getPlaces = async (search: any) => {

    const URL = `https://yahoo-weather5.p.rapidapi.com/weather?location=${search}&format=json&u=f`;

    try {
      const response = await axios.get(URL, options);
      // console.log(response);
      return response?.data;
    }
    catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getPlaces(search)
      .then((data: any) => {
        console.log(data);
        setPlace(data && data.location && data.location.city && data.location.city);
        setCountry(data && data.location && data.location.country && data.location.country);
        setTemperature(data.current_observation.condition.temperature);
        setText(data.current_observation.condition.text);
        setWeather(data && data);
        // console.log(weather);
      })
  }, [search]);

  useEffect(() => {
    dispatch(addWeather(weather));
  }, [weather]);

  return (
    <>
      <div>
        <div className="header">
          <div>
            <img src={require("../../assets/logo_web.png")} alt="image" />
          </div>
          <div className="searchBar">
            <form action="" onSubmit={handleSubmit}>
              <div className="search">
                <input type="text" className='rec' placeholder='Search city' name='search' />
                <img src={require("../../assets/search.png")} alt="image" className='searchIcon' />
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* <div className="header_mobile">
        <div className="menu">
          <img src={require("../../assets/icon_menu_white.png")} alt="image" className='img_menu_mobile' onClick={() => setMenuMobile(true)} />
        </div>
        <div>
          <img src={require("../../assets/logo.png")} alt="image" className='img_logo_mobile' />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <img src={require("../../assets/icon_search_white.png")} alt="image" className='img_search_mobile' onClick={() => setSearchMobile(true)} />
          </div>
        </form>
      </div>



      {menuMobile ?
        (
          <div className="sideBar">
            <div className="mobileTabs">
              <NavLink to="/" className='tab_mobile' onClick={() => setMenuMobile(false)}> Home</NavLink>
              <NavLink to="/fav" className='tab_mobile' onClick={() => setMenuMobile(false)}> Favourite</NavLink>
              <NavLink to="/recent" className='tab_mobile' onClick={() => setMenuMobile(false)}> Recent Search</NavLink>
            </div>
          </div>
        )
        :
        ""
      }
      {searchMobile ?
        (
          <div className="searchMobile">
            <div className="searchInputMobile">
              <div className="searchImageMobile">
                <img src={require("../../assets/icon_back_black.png")} alt="image" className='arrowMobile' onClick={() => setSearchMobile(false)} />
              </div>
              <input type="text" placeholder='Search for City' className='searchBarMobile' />
            </div>
          </div>
        )
        :
        ""
      } */}

    </>
  )
}

export default Home
