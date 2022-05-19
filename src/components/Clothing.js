import {useEffect, useState} from 'react'

const Clothing = (props) => {
 
    const [clothing, setClothing] = useState([])

    const URL = 'http://localhost:4005/clothes/';

    const getClothes = () =>{
        fetch(URL)
        .then(response => response.json())
        .then((result)=> setClothing(result))
    }

    const createClothes = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(item),
        });
        getClothes();
    };

    
    useEffect(()=> getClothes(), [])

    ///////////////////////////////////////////////////////
    const [newClothing, setNewClothing] = useState({
        weather: "all",
        clothing: "",
    });

    
    const handleChange = (event) => {
        setNewClothing({...newClothing,[event.target.name]: event.target.value})
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        createClothes(newClothing);
        setNewClothing({
            weather:'all',
            clothing:''
        })
    }
    
    const removeOne = (idx1) => document.getElementById(`id-${idx1}`).remove();

    return(
        <div className='listitem-container'>
            <div className='list-header'><h2 >Clothing</h2></div> 
        {clothing.map((item, idx1)=>{
            if(item.weather === 'all'){
                return(
                    <>
                    <div key={idx1} id={`id-${idx1}`} className='listitem'>
                        <div className="listitem-name"> 
                            <input type='checkbox' id='item' />
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
                <form onSubmit={handleSubmit} className='listitem'>
                    <input className = 'new-item' name='clothing' type='text' value={setNewClothing.clothing} placeholder="Add new item" onChange={handleChange}/>
                    <button className='add-item'>+</button>
                </form>
            </div>
        </div>
    )
    
    
     
}

export default Clothing;