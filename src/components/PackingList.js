import React, { useEffect, useState} from 'react';
import WeatherPackingList from './WeatherPackingList';


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



    const Loaded = () =>{
       const myKey = key[0].Key
    return(
        <div>
            <WeatherPackingList
                key={myKey}
                name={props.name}
                key2={myKey}
                date1={props.date1}
                date2={props.date2}/>
        </div>
        )
    }   

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    
    return key[0] ? Loaded() : loading();
}

export default PackingList;