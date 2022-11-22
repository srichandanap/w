import React, { useState } from 'react'
import './favourite.css';


const Favourite = () => {
  const [elements, setelements] = useState(false)

  return (
    <>
      {elements ?
        (<div className="favImage">
          <img src={require("../../assets/icon_nothing.png")} alt="image" />
          <div className="text">No Favourites added</div>
        </div>)
        :
        (
          <div className="favPlaces">
            <div className="favText">6 city added as favourite</div>
            <div className="places">
              <div className="place">
                Udupi, Karnataka
              </div>
              <div className="placeTemp">

                <div className="placeImage">
                  <img src={require("../../assets/icon_mostly_sunny.png")} alt="image" />
                </div>
                <div className="temp">31</div>
                <div className="condition">Mostly Sunny</div>

                <div className="placeImage">
                  <img src={require("../../assets/icon_favourite_Active.png")} alt="image" />
                </div>
              </div>
            </div>
          </div>
        )



      }
    </>
  )
}

export default Favourite