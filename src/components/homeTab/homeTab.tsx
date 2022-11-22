import React, {useState} from 'react';
import Footer from '../footer/footer';
import "./homeTab.css";
import Switch from "react-switch";

const HomeTab = () => {

  return (
    <>
      <div className="places">Udupi, Karnataka</div>
      <div className="image">
        <img src={require("../../assets/icon_favourite_Active.png")} alt="image" />
        <div className="favourite">Added to favourite</div>
      </div>

      <div className="sunnyImage">
        <img src={require("../../assets/icon_mostly_sunny.png")} alt="image" />
        <div className="temp">
          <div className="tempCount">87</div>
          <div className="conversion">

          </div>
        </div>
        <div className="text">Mostly Sunny</div>
      </div>
      <Footer />


    </>
  )
}

export default HomeTab