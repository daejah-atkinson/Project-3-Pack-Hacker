import React, { useEffect, useState} from 'react';
import CreatedList from './CreatedList';

const WeatherPackingList = (props) =>{
    const [weather, setWeather] = useState([]);

    let newKey = props.key2
    const apiKey = process.env.REACT_APP_API_KEY;
    const weatherURL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${newKey}?apikey=${apiKey}`;

    const getWeather = async () => {
        const response = await fetch(weatherURL);
        const data = await response.json();
        setWeather(data);
    };

    useEffect(() => { 
         getWeather(); // eslint-disable-next-line 
    }, []); 


    const Loaded = () =>{
        return(
            <div>
                <h1 className='created-list-title'>{props.name}</h1>
                <CreatedList
                    weather={weather}
                    date1={props.date1}
                    date2={props.date2}
                    destination={props.destination}/>
            </div>
            )
        }   
    
        const loading = () => {
            return(
                <div className='loader'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <span>Loading...</span>
                </div>
            );
        };
        
        return weather ? Loaded() : loading();
}

export default WeatherPackingList;