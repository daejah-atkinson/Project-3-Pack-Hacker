import {useEffect, useState} from 'react'

const ToDo = (props)=>{

    const [toDo, setToDo] = useState([])
    const [newToDo, setNewToDo] = useState({
        item: ''
    });

    const URL = 'https://project-3-pack-hacker.herokuapp.com/todo/';

    const getToDo = () =>{
        fetch(URL)
        .then(response => response.json())
        .then((result)=> setToDo(result))
        .then(()=> {setNewToDo({
            item:''
        })}); 
    }

    const createToDo = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(item),
        });
        getToDo();
    };

    
    useEffect(()=> getToDo(), [])

    ///////////////////////////////////////////////////////
    

    
    const handleChange = (event) => {
        setNewToDo({...newToDo,[event.target.name]: event.target.value})
        console.log(newToDo)
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        createToDo(newToDo);
        reset();
    }

    const reset = () => {
        setNewToDo({
            item:''
        })
    }

    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1>To Do</h1>
            </div>
            <>
            {toDo.map((item, idx3)=>{
                const deleteToDo = async () => {
                    await fetch(URL + toDo[idx3]._id, {
                        method: "delete",
                        })
                    getToDo()
                    }
                return(
                    <div key={idx3} id={idx3}className='listitem'>
                        <div className="listitem-name">
                            <input type='checkbox' />
                            <label class="strikethrough" for='item'>{item.item}</label>
                        </div>
                        <div className='delete-button'>
                            <button onClick={deleteToDo} >&#x1F5D1;</button>
                        </div>
                    </div>
                )})}
            </>
            <div>
                <form onSubmit={handleSubmit} className='listitem'>
                    <input className ='new-item' name='item' type='text' value={newToDo.item} placeholder="Add new item" onChange={handleChange}/>
                    <input className='add-item' type ='submit' value="+"/>
                </form>
            </div>
        </div>
    )
}

export default ToDo;


