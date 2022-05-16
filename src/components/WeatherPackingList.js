import React, { useEffect, useState} from 'react';
import CreatedList from './CreatedList';

const WeatherPackingList = (props) =>{
    console.log(props)
    const [weather, setWeather] = useState([]);

    let newKey = props.key2
    const apiKey = process.env.REACT_APP_API_KEY;
    const weatherURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${newKey}?apikey=${apiKey}`;

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
                <h1 className='created-list-title'>{props.name}</h1>
                <CreatedList
                    weather={weather}
                    date1={props.date1}
                    date2={props.date2}/>
            </div>
            )
        }   
    
        const loading = () => {
            return <h1>Loading...</h1>;
        };
        
        return weather ? Loaded() : loading();
}

export default WeatherPackingList;