import Clothing from "./Clothing"

const CreatedList = (props) =>{
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
         info.push(`Date: ${dateString}. Weather: ${newWeather.Day.IconPhrase}. Temperature: max - ${newWeather.Temperature.Maximum.Value} min - ${newWeather.Temperature.Minimum.Value} `)
    }
        
        return(
            <div className='list-container'>
                <p>{info}</p>
                <Clothing/>
            </div>
            )
        }   
    
        const loading = () => {
            return <h1>Loading...</h1>;
        };
        
        return props.weather.DailyForecasts ? Loaded() : loading();
}

export default CreatedList;