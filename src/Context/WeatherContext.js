import { createContext, useState } from "react";
import Cities from '../Context/data.json';


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState('istanbul');
    const [weatherData, setWeatherData] = useState();
    const values = {
        city,
        setCity,
        weatherData,
        setWeatherData,
        Cities
    };
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

export default WeatherContext;