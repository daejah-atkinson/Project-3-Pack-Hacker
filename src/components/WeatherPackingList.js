import React, { useEffect, useState} from 'react';
import CreatedList from './CreatedList';
import CreatePackingList from './CreatePackingList';

const WeatherPackingList = (props) =>{
    console.log(props)
    const [weather, setWeather] = useState([]);

    let newKey = props.key2

    const weatherURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${newKey}?apikey=aC9Gu4rBHnWD8x9wJr0jX3zsz6xyCZ5S`;

    const getWeather = async () => {
        const response = await fetch(weatherURL);
        const data = await response.json();
        console.log(data);
        setWeather(data);
    };

    useEffect(() => { 
         getWeather(); // eslint-disable-next-line 
    }, []); 


    const Loaded = () =>{
        return(
            <div>
                <h1>{props.name}</h1>
                <CreatedList
                    weather={weather}/>
            </div>
            )
        }   
    
        const loading = () => {
            return <h1>Loading...</h1>;
        };
        
        return weather ? Loaded() : loading();
}

export default WeatherPackingList;