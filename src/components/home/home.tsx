import React, { useState } from 'react';
import './home.css';

const Home = () => {

    return (
        <>
            <div>
                <div className="header">
                    <div>
                        <img src={require("../../assets/logo_web.png")} alt="image" />
                    </div>
                    <div className="searchBar">
                        <form action="">
                            <div className="search">
                                <input type="text" className='rec' placeholder='Search city' />
                                <img src={require("../../assets/search.png")} alt="image" className='searchIcon' />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
