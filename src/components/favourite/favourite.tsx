import React, { useState } from 'react'
import './favourite.css';


const Favourite = () => {
  const [elements, setelements] = useState(false)
  const [back, setBack] = useState(true)
  const [modal, setModal] = useState(false)

  console.log(modal);

  return (
    <>
      <div className="searchFavMobile">
        <div className="favMobileLeft">
          <div className="favMobileImage">
            <img src={require("../../assets/icon_back_black.png")} alt="image" className='arrowFavMobile' />
          </div>
          <div className="favMobileText">Favourite</div>

        </div>
        <div className="favMobileRight">
          <img src={require("../../assets/searchMobile.png")} alt="image" className='searchFavImageMobile' />
        </div>
      </div>


      {elements ?
        (<div className="favImage">
          <img src={require("../../assets/icon_nothing.png")} alt="image" />
          <div className="text">No Favourites added</div>
        </div>)
        :
        (
          <div className="favPlaceList">
            <div className="favText">
              <div className="favTextLeft">6 City added as favourite</div>
              <div className="favTextRight" onClick={() => { setModal(true) }}>Remove All</div>
            </div>
            <div className="favPlaces" >
              <div className="favPlaceItem">
                <div className="favPlaceMobile" >
                  <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"lightblue",width:"550px"}}>
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
                  </div>
                  
                </div>
                <div className="placeImage">
                  <img src={require("../../assets/icon_favourite_Active.png")} alt="image" />
                </div>
              </div>
              {modal ?
                (
                  <div className="modalBlur">
                    <div className="modal">
                      <div className="modalText">Are you sure to remove all your favourites?</div>
                      <div className="buttons">
                        <button className="btnNo" onClick={() => { setModal(false) }}>NO</button>
                        <button className="btnYes">YES</button>
                      </div>
                    </div>
                  </div>
                )
                :
                ""
              }
            </div>
          </div>
        )}
    </>
  )
}

export default Favourite