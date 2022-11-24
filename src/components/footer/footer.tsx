import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <footer className='footer'>

                <div className="footerItem">
                    <div className="footerImage">
                        <img src={require("../../assets/icon_temperature_info.png")} alt="image" className='footerImg' />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">Min-Max</div>
                        <div className="footerValue">75-90</div>
                    </div>
                </div>

                <div className="footerItem">
                    <div className="footerImage">
                    <img src={require("../../assets/icon_precipitation_info.png")} alt="image" className='footerImg'  />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">Precepitation</div>
                        <div className="footerValue">0%</div>
                    </div>
                </div>

                <div className="footerItem">
                    <div className="footerImage">
                    <img src={require("../../assets/icon_humidity_info.png")} alt="image" className='footerImg' />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">Humidity</div>
                        <div className="footerValue">47%</div>
                    </div>
                </div>

                <div className="footerItem">
                    <div className="footerImage">
                    <img src={require("../../assets/icon_wind_info.png")} alt="image" className='footerImg' />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">Wind</div>
                        <div className="footerValue">4 mph</div>
                    </div>
                </div>

                <div className="footerItem">
                    <div className="footerImage">
                    <img src={require("../../assets/icon_visibility_info.png")} alt="image" className='footerImg'  />
                    </div>
                    <div className="footerInfo">
                        <div className="footerText">visibility</div>
                        <div className="footerValue">12 mph</div>
                    </div>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer