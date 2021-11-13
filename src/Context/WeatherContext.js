import { createContext, useState } from "react";
import Sehirler from './data.json';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [sehir, setSehir] = useState(Sehirler);
    const [weatherData, setWeatherData] = useState([]);
    const values = {
        sehir,
        setSehir,
        weatherData,
        setWeatherData,
        Sehirler
    };
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

export default WeatherContext;