import {useState} from 'react'

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
    const [clothing, setClothing] = useState([])

    const removeOne = (idx1) => document.getElementById(`id-${idx1}`).remove();

    return(
        <div className='listitem-container'>
            <div className='list-header'><h2 >Clothing</h2></div> 
        {clothes.map((item, idx1)=>{
            if(item.weather === 'all'){
                return(
                    <>
                    <div key={idx1} id={`id-${idx1}`} className='listitem'>
                        <div className="listitem-name"> 
                            <input type='checkbox' id='item'/>
                            <label class="strikethrough" for='item'> {item.clothing} </label>
                        </div>
                        <div className='delete-button'>
                            <button onClick={() => removeOne(idx1)}>&#x1F5D1;</button>
                        </div>
                    </div>
                    </>
                )
            } if(item.weather === 'sunny' && props.maxtemp > 75 ){
                return(
                    <>
                    <div key={idx1} id={`id-${idx1}`} className='listitem'>
                        <div className="listitem-name">
                            <input type='checkbox' id='item'/>
                            <label class="strikethrough" for='item'> {item.clothing} </label>
                        </div>
                        <div className='delete-button'>
                            <button onClick={() => removeOne(idx1)}>&#x1F5D1;</button>
                        </div>
                    </div>
                    </>
                )
            }
            if(item.weather === 'cold' && props.mintemp < 50 ){
                return(
                    <>
                    <div key={idx1} id={`id-${idx1}`} className='listitem'>
                        <div className="listitem-name">
                            <input type='checkbox' id='item'/>
                            <label class="strikethrough" for='item'> {item.clothing} </label>
                        </div>
                        <div className='delete-button'>
                            <button onClick={() => removeOne(idx1)}>&#x1F5D1;</button>
                        </div>
                    </div>
                    </>
                )
            }
           
        })}
            <div>
                <form className='listitem'>
                    <input className = 'new-item' type='text' placeholder="Add new item"/>
                    <button className='add-item'>+</button>
                </form>
            </div>
        </div>
    )
    
    
     
}

export default Clothing;