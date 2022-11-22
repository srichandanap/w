import React from 'react';
import { Navigate, NavLink, useNavigate, Route, Routes } from "react-router-dom";
import './home.css';

const Home = () => {
    return (
        <>
            <div>
                <div className="header">
                    <div className="logo">
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
