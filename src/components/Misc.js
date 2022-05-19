import {useEffect, useState} from 'react'

const Misc = (props) =>{

    const [misc, setMisc] = useState([])

    const URL = 'http://localhost:4005/misc/';

    const getMisc = () =>{
        fetch(URL)
        .then(response => response.json())
        .then((result)=> setMisc(result))
    }

    const createMisc = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(item),
        });
        getMisc();
    };

    
    useEffect(()=> getMisc(), [])

    ///////////////////////////////////////////////////////
    const [newMisc, setNewMisc] = useState({
        item: "",
        weather:"all"
    });

    
    const handleChange = (event) => {
        setNewMisc({...newMisc,[event.target.name]: event.target.value})
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        createMisc(newMisc);
        setNewMisc({
            item:'',
            weather:'all'
        })
    }
    
    const removeOne = (idx1) => document.getElementById(`id-${idx1}`).remove();

    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1 >Misc</h1>
            </div>
            {misc.map((item, idx4)=>{
                if(item.weather === 'all'){
                    return(
                        <>
                        <div key={idx4} id={`id-${idx4}`}  className='listitem'>
                            <div className="listitem-name">
                                <input type='checkbox' id='item'/>
                                <label class="strikethrough" for='item'> {item.item} </label>
                            </div>
                            <div className='delete-button'>
                                <button onClick={() => removeOne(idx4)} >&#x1F5D1;</button>
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
                                <button onClick={() => removeOne(idx4)} >&#x1F5D1;</button>
                            </div>
                        </div>
                        </>
                    )
                }
               
            })}
            <div>
                <form onSubmit={handleSubmit} className='listitem'>
                    <input className = 'new-item' name = 'item' type='text' value={setNewMisc.item}  placeholder="Add new item" onChange={handleChange}/>
                    <button className='add-item'>+</button>
                </form>
            </div>
        </div>

    )
}

export default Misc;