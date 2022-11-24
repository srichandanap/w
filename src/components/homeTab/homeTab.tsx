import React, { useState } from 'react';
import Footer from '../footer/footer';
import { NavLink, Route, Routes } from "react-router-dom";
import "./homeTab.css";
import Switch from "react-switch";
import { useSelector } from 'react-redux';

const HomeTab = () => {

  const place = useSelector((state: any) => state.weather.place)
  const country = useSelector((state: any) => state.weather.country)

  const weatherData = useSelector((state: any) => state.weather.weatherData);


  const [fav, setFav] = useState(false)
  const [menuMobile, setMenuMobile] = useState(false)
  const [searchMobile, setSearchMobile] = useState(false)

  const [value, onChange] = useState("");
  const [time, onChangeTime] = useState("");

  const date = new Date();

  setInterval(function () {
    today();
  }, 1000);


  setInterval(function () {
    todayTime();
  }, 1000);

  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()} `
    );
  };

  const todayTime = () => {
    onChangeTime(
      ` ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
      })}`
    );
  };


  const handleChange = () => {
    setFav(!fav);
  }

  let icon = ''
  switch (
  weatherData &&
  weatherData.current_observation &&
  weatherData.current_observation.condition.text
  ) {
    case 'Haze':
      icon = 'icon_mostly_sunny_small.png'
      break
    case 'Mostly Sunny':
      icon = 'icon_mostly_sunny_small.png'
      break
    case 'Sunny':
      icon = 'icon_mostly_sunny_small.png'
      break
    case 'Clear':
      icon = 'icon_mostly_sunny_small.png'
      break

    case 'Cloudy':
      icon = 'icon_mostly_cloudy_small.png'
      break
    case 'Partly Cloudy':
      icon = 'icon_partly_cloudy_small.png'
      break
    case 'Mostly Cloudy':
      icon = 'icon_mostly_cloudy_small.png'
      break

    case 'Thunderstorms':
      icon = 'icon_thunderstorm_small.png'
      break

    case 'Rainy':
      icon = 'icon_rain_small.png'
      break
    case 'Sleet':
      icon = 'icon_rain_small.png'
      break
    case ' Showers':
      icon = 'icon_rain_small.png'
      break
    default:
      icon = 'icon_rain_small.png'
      break
  }

  return (
    <>

      <div className="header_mobile">
        <div className="menu">
          <img src={require("../../assets/icon_menu_white.png")} alt="image" className='img_menu_mobile' onClick={() => setMenuMobile(true)} />
        </div>
        <div>
          <img src={require("../../assets/logo.png")} alt="image" className='img_logo_mobile' />
        </div>
        <div>
          <img src={require("../../assets/icon_search_white.png")} alt="image" className='img_search_mobile' onClick={() => setSearchMobile(true)} />
        </div>
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
      }


      <div className="tabs_mobile">
        <div className="date">{value}&nbsp;&nbsp;{time}</div>
      </div>



      <div className="places">{place},&nbsp;{country}</div>
      <div className="image" onClick={handleChange}>
        {fav ? <img src={require("../../assets/icon_favourite_Active.png")} alt="image" className='img' /> : <img src={require("../../assets/fav_icon.png")} alt="image" className='img' />}
        <div className="favourite" style={{ color: fav ? '#FAD058' : '#FFFFFF' }}>Added to favourite</div>
      </div>

      <div className="sunnyImage">
        <img src={require(`../../assets/${icon}`)} alt="image" className='switchImage' />
        <div className="temp">
          <div className="tempCount">{weatherData && weatherData.current_observation && weatherData.current_observation.condition && weatherData.current_observation.condition.temperature}</div>
          <div className="conversion">

          </div>
        </div>
        <div className="text">{weatherData && weatherData.current_observation && weatherData.current_observation.condition && weatherData.current_observation.condition.text}</div>
      </div>
      <Footer />


    </>
  )
}

export default HomeTab