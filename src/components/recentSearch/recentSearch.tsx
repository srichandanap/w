import React from 'react'
import "../favourite/favourite.css";

const RecentSearch = () => {
  return (
    <>
      <div className="favImage">
        <img src={require("../../assets/icon_nothing.png")} alt="image" />
        <div className="text">No Recent Search</div>
      </div>
    </>
  )
}

export default RecentSearch