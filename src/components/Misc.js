import {useEffect, useState} from 'react'

const Misc = (props) =>{
    let rain;
    props.weather.map((item)=>{
        if(item.includes('t-storms')){
            rain = true;
        } else if(item.includes('rain')){
            rain = true;
        } else if(item.includes('Thunderstorms')){
            rain = true;
        } else if(item.includes('Rainy')){
            rain= true;
        } else if(item.includes('showers')){
            rain= true;
        }
    })

    const [misc, setMisc] = useState([])

    const URL = 'https://project-3-pack-hacker.herokuapp.com/misc/';

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
    
    
    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1 >Misc</h1>
            </div>
            {misc.map((item, idx4)=>{
                const deleteMisc = async () => {
                    await fetch(URL + misc[idx4]._id, {
                        method: "delete",
                        })
                    getMisc()
                    }
                if(item.weather === 'all'){
                    return(
                        <>
                        <div key={idx4} id={`id-${idx4}`}  className='listitem'>
                            <div className="listitem-name">
                                <input type='checkbox' id='item'/>
                                <label class="strikethrough" for='item'> {item.item} </label>
                            </div>
                            <div className='delete-button'>
                                <button onClick={deleteMisc} >&#x1F5D1;</button>
                            </div>
                        </div>
                        </>
                    )
                } if(item.weather === 'rain' && rain){
                    return(
                        <>
                        <div className='listitem'>
                            <div className="listitem-name">
                                <input type='checkbox' id='item'/>
                                <label class="strikethrough" for='item'> {item.item} </label>
                            </div>
                            <div className='delete-button'>
                                <button onClick={deleteMisc} >&#x1F5D1;</button>
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