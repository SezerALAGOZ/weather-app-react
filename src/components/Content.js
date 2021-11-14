import React from 'react';
import {useEffect} from 'react';
import { useContext } from 'react';
import WeatherContext from '../Context/WeatherContext';

function Content() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const {city, weatherData, setWeatherData, Cities} = useContext(WeatherContext);

    const isCity = Cities.find(item => item.name === city.toUpperCase())

    const long =  isCity ? Cities.find(item => item.name === city.toUpperCase()).long : '';
    const lat = isCity ? Cities.find(item => item.name === city.toUpperCase()).lat : '';
    const API_Key = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${API_Key}`;

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => setWeatherData(data.daily))
    }, [apiUrl, setWeatherData])

    console.log(weatherData);

    return (
        <div>
            {
                weatherData && (
                    weatherData.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{days[new Date(item.dt * 1000).getDay()]}</p>
                                <div>
                                    <img 
                                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                        alt="icon"
                                    />
                                </div>
                                <div>
                                    <p>{item.weather[0].description}</p>
                                    <p>{(item.temp.day - 273.15).toFixed(0)}<sup>o</sup></p>
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