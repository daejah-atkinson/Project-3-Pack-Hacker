
const Clothing = (props) => {
    const clothes = [
        {
            weather: 'all',
            clothing: 'underwear'
        },
        {
            weather: 'all',
            clothing: 'socks'
        },
        {
            weather: 'all',
            clothing: 'tops'
        },
        {
            weather: 'all',
            clothing: 'pants'
        },
        {
            weather: 'all',
            clothing: 'hat/cap'
        },
        {
            weather: 'all',
            clothing: 'shoes'
        },
        {
            weather: 'all',
            clothing: 'jackets'
        },
        {
            weather: 'all',
            clothing: 'pjs'
        },
        {
            weather: 'sunny',
            clothing: 'shorts'
        },
        {
            weather: 'sunny',
            clothing: 'swimsuit'
        },



    ];
    return(
        <div className='listitem-container'>
            <h2 className='list-header'>Clothing</h2>
        {clothes.map((item)=>{
            if(item.weather === 'all'){
                console.log(item)
                return(
                    <div className='listitem'>
                       <input type='checkbox' id='item'/>
                       <label for='item'>{item.clothing} </label>
                    </div>
                )
            } if(item.weather === 'sunny' ){
                console.log("sunny", item.clothing, props.maxtemp.includes('90'))
                console.log(props.maxtemp)
            }
           
        })}
        </div>
    )
    
    
     
}

export default Clothing;