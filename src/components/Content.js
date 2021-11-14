import React from 'react';
import {useEffect} from 'react';
import { useContext } from 'react';
import WeatherContext from '../Context/WeatherContext';

function Content() {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const {city, weatherData, setWeatherData, Cities} = useContext(WeatherContext);

    const isCity = Cities.find(item => item.name === city.toLowerCase())

    const long =  isCity ? Cities.find(item => item.name === city.toLowerCase()).long : '';
    const lat = isCity ? Cities.find(item => item.name === city.toLowerCase()).lat : '';
    const API_Key = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${API_Key}`;

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => setWeatherData(data.daily))
    }, [apiUrl, setWeatherData])

    console.log(weatherData);

    return (
        <div id="weather-content">
            {
                weatherData && (
                    weatherData.map((item, index) => {
                        return (
                            <div className="weather-card" key={index}>
                                <p className="day-name">{days[new Date(item.dt * 1000).getDay()]}</p>
                                <div className="weather-icon">
                                    <img 
                                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                        alt="icon"
                                    />
                                </div>
                                <div className="temperature-area">
                                    <p className="weather-description">{item.weather[0].description}</p>
                                    <p className="temperature max-temperature">{(item.temp.max - 273.15).toFixed(0)}<sup>o</sup></p>
                                    <p className="temperature min-temperature">{(item.temp.min - 273.15).toFixed(0)}<sup>o</sup></p>
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}

export default Content;
