import React, { useState } from 'react'
import "../favourite/favourite.css";
import { useNavigate } from 'react-router-dom';

const RecentSearch = () => {
  const navigate = useNavigate();
  const recentData = JSON.parse(window.localStorage.getItem("data") || "[]");
  const recentMobileData = JSON.parse(window.localStorage.getItem("data") || "[]");

  const [elements, setElements] = useState(false)

  return (
    <>
      <div className="searchFavMobile">
        <div className="favMobileLeft">
          <div className="favMobileImage">
            <img src={require("../../assets/icon_back_black.png")} alt="image" className='arrowFavMobile' onClick={() => navigate('/')} />
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
              {recentData.reverse().map((data: any, i: any) => {
                return (<>
                  {JSON.stringify(data.place) !== '[]' && <div className="favPlaceItem">
                    <div className="place">
                      {data && data.place}, {data && data.country}
                    </div>
                    <div className="placeTemp">

                      <div className="placeImage">
                        <img src={require("../../assets/icon_mostly_sunny_small.png")} alt="image" />
                      </div>
                      <div className="celFlex">
                        <div className="temp">{data && data.temperature}</div>
                        <div className="cel">{"\u00B0"}c</div>
                      </div>
                      <div className="condition">{data && data.text}</div>


                    </div>
                    <div className="placeImage">
                      <img src={require("../../assets/icon_favourite_Active.png")} alt="image" />
                    </div>
                  </div>}</>
                )
              })}

              {recentData.reverse().map((data: any, i: any) => {
                return (<>
                  {JSON.stringify(data.place) !== '[]' && <div className="favPlaceMobileItem">

                    <div className="favMobileDetails">
                      <div className="placeMobile">
                        {data && data.place}, {data && data.country}
                      </div>
                      <div className="placeTempMobile">

                        <div>
                          <img src={require("../../assets/icon_mostly_sunny_small.png")} alt="image" className="placeImageMobile" />
                        </div>
                        <div className="celFlexMobile">
                          <div className="tempMobile">{data && data.temperature}</div>
                          <div className="celMobile">{"\u00B0"}c</div>
                        </div>
                        <div className="conditionMobile">{data && data.text}</div>

                      </div>
                    </div>
                    <div className="placeFavImageMobile">
                      <img src={require("../../assets/icon_favourite_Active.png")} alt="image" />
                    </div>
                  </div>}</>
                )
              })}

            </div>
          </div>
        )
      }

    </>
  )
}

export default RecentSearch