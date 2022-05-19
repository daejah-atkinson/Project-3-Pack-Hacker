
const Weather = (props) => {
    let date2 = props.date2
    let date1 = props.date1
    let dateTwo = new Date(date2)
    let dateOne = new Date(date1)
    let difference = dateTwo.getTime() - dateOne.getTime()
    let days = difference / (1000 * 3600 * 24)

    // let weather = props.weather;
    console.log(props.temperature)
    console.log(props.allweather)
    let allWeather = props.allweather.DailyForecasts


    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1>Weather</h1>
            <p className='todo-p'>{days} day trip to {props.destination}</p>
        </div>
            {allWeather.map((item, idx5)=>{
               return(
                <div key={idx5} id={idx5}className='listitem'>
                <div className="listitem-name weather">
                    <p className='weather-p'>{item.Day.IconPhrase} </p> <p><span className='temps'> HIGH: {item.Temperature.Maximum.Value}{item.Temperature.Maximum.Unit} Low: {item.Temperature.Minimum.Value}{item.Temperature.Minimum.Unit}</span></p>
                </div>
                </div>
               )
            })} 
            </div>
    )
}

export default Weather;