import React from 'react'
import Home from '../../components/home/home'
import './homePage.css';
import Tabs from '../../components/tabs/tabs';

const HomePage = () => {
    return (
        <>
            <div className="homeContainer">
                <Home />
                <Tabs />
            </div>
        </>
    )
}

export default HomePage
