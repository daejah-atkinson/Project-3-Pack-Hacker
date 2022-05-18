const Misc = (props) =>{

    const miscellaneous = [
        {
            item: 'Wallet',
            weather:'all'
        },
        {
            item: 'Keys',
            weather:'all'
        },
        {
            item: 'Phone',
            weather:'all'
        },
        {
            item: 'Phone charger',
            weather:'all'
        },
        {
            item: 'Sunglasses',
            weather:'all'
        },
        {
            item: 'Earplugs',
            weather:'all'
        },
        {
            item: 'Travel pillow',
            weather:'all'
        },
        {
            item: 'Umbrella',
            weather:'rain'
        },
    ]

    console.log(props.weather)

    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1 >Misc</h1>
            </div>
            {miscellaneous.map((item)=>{
                if(item.weather === 'all'){
                    return(
                        <>
                        <div className='listitem'>
                            <div className="listitem-name">
                                <input type='checkbox' id='item'/>
                                <label class="strikethrough" for='item'> {item.item} </label>
                            </div>
                            <div className='delete-button'>
                                <button>&#x1F5D1;</button>
                            </div>
                        </div>
                        </>
                    )
                } if((item.weather === 'rain' && props.weather.includes('rain')) || (item.weather === 'rain' && props.weather.includes('Thunderstorms')) || (item.weather === 'rain' && props.weather.includes('showers')) ){
                    return(
                        <>
                        <div className='listitem'>
                            <div className="listitem-name">
                                <input type='checkbox' id='item'/>
                                <label class="strikethrough" for='item'> {item.item} </label>
                            </div>
                            <div className='delete-button'>
                                <button>&#x1F5D1;</button>
                            </div>
                        </div>
                        </>
                    )
                }
               
            })}
        </div>

    )
}

export default Misc;