import React from 'react'

function Display(props) {
    const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img } = props.weather;
    return (
        <div className=' weather-layout'>
            <div className="row">
                <div className='col-md-3 weather-temp'>
                    <h2>{location}</h2>
                    <h2>{temperature}<sup>o</sup>,<span> {description}</span></h2>
                    <h4>{region},{country}</h4>
                </div>
                <div className="col-md-9 col-sm-12 ">
                    <img className="img" src={img} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Preassure</b>(millibar)</p>
                    <h2>{pressure}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{precip}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </div>

            </div>
        </div>
    )
}
export default Display;