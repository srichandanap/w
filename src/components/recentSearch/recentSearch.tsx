import React, {useState} from 'react'
import "../favourite/favourite.css";

const RecentSearch = () => {

  const [elements, setElements] = useState(false)
  return (
    <>
      {elements ?
        (<div className="favImage">
          <img src={require("../../assets/icon_nothing.png")} alt="image" />
          <div className="text">No Recent Search</div>
        </div>)
        :
        (
          <div className="favPlaceList">
            <div className="favText">
              <div className="favTextLeft">You recently searched for</div>
              <div className="favTextRight">Clear All</div>
            </div>
            <div className="favPlaces">
              <div className="favPlaceItem">
                <div className="place">
                  Udupi, Karnataka
                </div>
                <div className="placeTemp">

                  <div className="placeImage">
                    <img src={require("../../assets/icon_mostly_sunny_small.png")} alt="image" />
                  </div>
                  <div className="temp">31</div>
                  <div className="condition">Mostly Sunny</div>

                </div>
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

export default RecentSearch