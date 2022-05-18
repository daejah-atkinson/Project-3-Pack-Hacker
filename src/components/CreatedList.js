import Clothing from "./Clothing";
import ToDo from "./ToDo";
import Toiletries from "./Toiletries";
import Misc from "./Misc";

const CreatedList = (props) =>{
    let weather = []
    let maxtemp = []
    let mintemp=[]
    const Loaded = () =>{
        let theWeather = props.weather.DailyForecasts
    for(let i=0; i < theWeather.length; i++){
        let newWeather = theWeather[i]
         weather.push(newWeather.Day.IconPhrase)
         maxtemp.push(newWeather.Temperature.Maximum.Value)
         mintemp.push(newWeather.Temperature.Minimum.Value)
    }

    let maxtempLowest = (Math.min(...maxtemp))
    let mintempLowest = (Math.min(...mintemp))

        return(
            <div className='list-container'>
                <ToDo
                date1={props.date1}
                date2={props.date2}/>
                <br/>
                <Clothing
                    weather={weather}
                    maxtemp={maxtempLowest}
                    mintemp={mintempLowest}/>
                    <br/>
                <Toiletries/>
                <br/>
                <Misc
                weather = {weather}/>
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
        
        return props.weather.DailyForecasts ? Loaded() : loading();
}

export default CreatedList;