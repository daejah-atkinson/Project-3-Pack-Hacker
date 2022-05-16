import Clothing from "./Clothing"
import ToDo from "./ToDo"

const CreatedList = (props) =>{
    // let info = []
    let weather = []
    let maxtemp = []
    let mintemp=[]
    const Loaded = () =>{
        let theWeather = props.weather.DailyForecasts
    for(let i=0; i < theWeather.length; i++){

        let newWeather = theWeather[i]

        // var str = newWeather.Date;
        // var date = new Date(str);
        // var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        // var dateString = months[date.getMonth()] + ' ' + ("00" + date.getDate()).slice(-2)  + ', ' + date.getFullYear() 

        // console.log(str)
        //  info.push(`Date: ${dateString}. Weather: ${newWeather.Day.IconPhrase}. Temperature: max - ${newWeather.Temperature.Maximum.Value} min - ${newWeather.Temperature.Minimum.Value} `)
         weather.push(newWeather.Day.IconPhrase)
         maxtemp.push(newWeather.Temperature.Maximum.Value)
         mintemp.push(newWeather.Temperature.Minimum.Value)
    }
        
        return(
            <div className='list-container'>
                {/* <p>{info}</p> */}
                <ToDo
                date1={props.date1}
                date2={props.date2}/>
                <Clothing
                    // info={info}
                    weather={weather}
                    maxtemp={maxtemp}
                    mintemp={mintemp}/>
            </div>
            )
        }   
    
        const loading = () => {
            return <h1>Loading...</h1>;
        };
        
        return props.weather.DailyForecasts ? Loaded() : loading();
}

export default CreatedList;