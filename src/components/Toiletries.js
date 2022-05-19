import {useEffect, useState} from 'react'

const Toiletries = () => {

    const [toiletries, setToiletries] = useState([])

    const URL = 'http://localhost:4005/toiletries/';

    const getToiletries = () =>{
        fetch(URL)
        .then(response => response.json())
        .then((result)=> setToiletries(result))
    }

    const createToiletries = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(item),
        });
        getToiletries();
    };

    
    useEffect(()=> getToiletries(), [])

    ///////////////////////////////////////////////////////
    const [newToiletries, setNewToiletries] = useState({
        item: "",
    });

    
    const handleChange = (event) => {
        setNewToiletries({...newToiletries,[event.target.name]: event.target.value})
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        createToiletries(newToiletries);
        setNewToiletries({
            item:''
        })
    }

    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1 >Toiletries</h1>
            </div>
            <>
            {toiletries.map((item, idx2)=>{
                const deleteToiletries = async () => {
                    await fetch(URL + toiletries[idx2]._id, {
                        method: "delete",
                    })
                    getToiletries()
                }
                return(
                    <div key={idx2} className='listitem'>
                        <div className="listitem-name">
                            <input type='checkbox' />
                            <label class="strikethrough" for='item'> {item.item}</label>
                        </div>
                        <div className="delete-button">
                            <button onClick={deleteToiletries}>&#x1F5D1;</button>
                        </div>
                    </div>
                )})}
            </>
            <div>
                <form onSubmit={handleSubmit} className='listitem'>
                    <input className = 'new-item' name='item' type='text'  value={setNewToiletries.item} placeholder="Add new item" onChange={handleChange}/>
                    <button className='add-item'>+</button>
                </form>
            </div>
        </div>
    )
}

export default Toiletries;