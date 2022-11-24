import React, { useState } from 'react'
import "../favourite/favourite.css";
import {useNavigate} from 'react-router-dom';

const RecentSearch = () => {
  const navigate = useNavigate();

  const [elements, setElements] = useState(false)
  return (
    <>
      <div className="searchFavMobile">
        <div className="favMobileLeft">
          <div className="favMobileImage">
            <img src={require("../../assets/icon_back_black.png")} alt="image" className='arrowFavMobile' onClick={() => navigate('/')}/>
          </div>
          <div className="favMobileText">Recent Search</div>

        </div>
        <div className="favMobileRight">
          <img src={require("../../assets/searchMobile.png")} alt="image" className='searchFavImageMobile' />
        </div>
      </div>

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


              <div className="favPlaceMobileItem">

                <div className="favMobileDetails">
                  <div className="placeMobile">
                    Udupi, Karnataka
                  </div>
                  <div className="placeTempMobile">

                    <div>
                      <img src={require("../../assets/icon_mostly_sunny_small.png")} alt="image" className="placeImageMobile" />
                    </div>
                    <div className="tempMobile">31</div>
                    <div className="conditionMobile">Mostly Sunny</div>

                  </div>
                </div>
                <div className="placeFavImageMobile">
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