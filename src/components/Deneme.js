import React from 'react';
import data from '../Context/data.json';
import {useEffect, useState} from 'react';

function Deneme() {
    
    const [hava, setHava] = useState({});
    const lon = data.find(item => item.name === 'ADANA').long;
    const lat = data.find(item => item.name === 'ADANA').lat;
    const API_Key = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_Key}`;

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => setHava(data))
    }, [apiUrl])
    
    return (
        <div>
            {JSON.stringify(hava)}
        </div>
    )
}

export default Deneme
