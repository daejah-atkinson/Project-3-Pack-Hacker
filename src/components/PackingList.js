import React, { useEffect, useState} from 'react';

const PackingList = (props) =>{
    const apiKey = process.env.REACT_APP_API_KEY;

    const URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${props.destination}`;
    
    const [key, setKey] = useState([]);

    const getKey = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log('data',data);
        setKey(data);
    };

    useEffect(() => {
        getKey(); // eslint-disable-next-line
    }, []); 
    
  
    let newKey = key[0].Key;

    const weatherURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${newKey}apikey=${apiKey}`;

    const [weather, setWeather] = useState([]);

    const getWeather = async () => {
        const response = await fetch(weatherURL);
        const data = await response.json();
        console.log(data);
        setWeather(data);
    };

    
    useEffect(() => { 
        getWeather(); // eslint-disable-next-line
    }, []); 
    
    console.log('weather', weather);
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.destination}</h1>
        </div>
    )
}

export default PackingList;