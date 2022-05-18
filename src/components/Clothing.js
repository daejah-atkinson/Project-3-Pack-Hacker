
const Clothing = (props) => {
    const clothes = [
        {
            weather: 'all',
            clothing: 'Underwear'
        },
        {
            weather: 'all',
            clothing: 'Socks'
        },
        {
            weather: 'all',
            clothing: 'Tops'
        },
        {
            weather: 'all',
            clothing: 'Pants'
        },
        {
            weather: 'all',
            clothing: 'Hat/cap'
        },
        {
            weather: 'all',
            clothing: 'Shoes'
        },
        {
            weather: 'all',
            clothing: 'Jackets'
        },
        {
            weather: 'all',
            clothing: 'Pjs'
        },
        {
            weather: 'sunny',
            clothing: 'Shorts'
        },
        {
            weather: 'sunny',
            clothing: 'Swimsuit'
        },
        {
            weather: 'cold',
            clothing: 'Scarf'
        },
        {
            weather: 'cold',
            clothing: 'Gloves'
        },
        {
            weather: 'cold',
            clothing: 'Winter coat'
        }
    ];

    return(
        <div className='listitem-container'>
            <div className='list-header'><h2 >Clothing</h2></div> 
        {clothes.map((item)=>{
            if(item.weather === 'all'){
                return(
                    <>
                    <div className='listitem'>
                        <div className="listitem-name"> 
                            <input type='checkbox' id='item'/>
                            <label class="strikethrough" for='item'> {item.clothing} </label>
                        </div>
                        <div className='delete-button'>
                            <button>&#x1F5D1;</button>
                        </div>
                    </div>
                    </>
                )
            } if(item.weather === 'sunny' && props.maxtemp > 75 ){
                return(
                    <>
                    <div className='listitem'>
                        <div className="listitem-name">
                            <input type='checkbox' id='item'/>
                            <label class="strikethrough" for='item'> {item.clothing} </label>
                        </div>
                        <div className='delete-button'>
                            <button>&#x1F5D1;</button>
                        </div>
                    </div>
                    </>
                )
            }
            if(item.weather === 'cold' && props.mintemp < 50 ){
                return(
                    <>
                    <div className='listitem'>
                        <div className="listitem-name">
                            <input type='checkbox' id='item'/>
                            <label class="strikethrough" for='item'> {item.clothing} </label>
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

export default Clothing;