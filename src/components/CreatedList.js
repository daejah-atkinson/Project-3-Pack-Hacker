
const CreatedList = (props) =>{
    console.log('newest', props)
    let info = []
    const Loaded = () =>{
        let theWeather = props.weather.DailyForecasts
        console.log(theWeather.length)
    for(let i=0; i < theWeather.length; i++){

        let newWeather = theWeather[i]

        var str = newWeather.Date;
        var date = new Date(str);
        var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var dateString = months[date.getMonth()] + ' ' + ("00" + date.getDate()).slice(-2)  + ', ' + date.getFullYear() 

        console.log(str)
         info.push(`On ${dateString} it will be ${newWeather.Day.IconPhrase}. `)

        if(newWeather.Day.HasPrecipitation === true && newWeather.Day.PrecipitationType === 'Rain'){
           info.push(`On ${dateString} It's also going to rain. `)
        }  console.log(info) 
    }
        return(
            <div>
                <h1>CreatedList</h1>
                <p>{info}</p>
                <div className='packing-container'>
                <h3>Socks</h3>
                </div>
            </div>
            )
        }   
    
        const loading = () => {
            return <h1>Loading...</h1>;
        };
        
        return props.weather.DailyForecasts ? Loaded() : loading();
}

export default CreatedList;