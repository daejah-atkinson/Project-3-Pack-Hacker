import {useEffect, useState} from 'react'

const ToDo = (props)=>{
    let date2 = props.date2
    let date1 = props.date1
    let dateTwo = new Date(date2)
    let dateOne = new Date(date1)
    let difference = dateTwo.getTime() - dateOne.getTime()
    let days = difference / (1000 * 3600 * 24)

    const [toDo, setToDo] = useState([])

    const URL = 'http://localhost:4005/todo/';

    const getToDo = () =>{
        fetch(URL)
        .then(response => response.json())
        .then((result)=> setToDo(result))
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
    const [newToDo, setNewToDo] = useState({
        item: ''
    });

    
    const handleChange = (event) => {
        setNewToDo({...newToDo,[event.target.name]: event.target.value})
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        createToDo(newToDo);
        setNewToDo({
            item:''
        }); 
    }

    // const removeOne = (idx3) => document.getElementById(`id-${idx3}`).remove();


    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1 >To Do</h1>
            <p className='todo-p'>Things to do before your {days} day trip to {props.destination}:</p>
            </div>
            <>
            {toDo.map((item, idx3)=>{
                console.log(URL + toDo[idx3]._id)
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
                    <input className ='new-item' name='item' type='text'  value={setNewToDo.item} placeholder="Add new item" onChange={handleChange}/>
                    <button className='add-item'>+</button>
                </form>
            </div>
        </div>
    )
}

export default ToDo;


