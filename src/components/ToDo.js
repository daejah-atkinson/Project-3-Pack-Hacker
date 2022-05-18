import {useState} from 'react'

const ToDo = (props)=>{
    let date2 = props.date2
    let date1 = props.date1
    let dateTwo = new Date(date2)
    let dateOne = new Date(date1)
    let difference = dateTwo.getTime() - dateOne.getTime()
    let days = difference / (1000 * 3600 * 24)

    const [toDoItem, setToDoItem] = useState([])

    const todo = [
        {
            item: "Water the plants"
        },
        {
            item: "Clean out the fridge"
        },
        {
            item: "Charge electronic devices"
        },
        {
            item: "Pause the mail"
        },
        {
            item: "Online Check-in"
        }

    ];

    const removeOne = (idx) => document.getElementById(`id-${idx}`).remove();

    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1 >To Do</h1>
            <p className='todo-p'>Things to do before your {days} day trip:</p>
            </div>
            <>
            {todo.map((item, idx)=>{
                
                return(
                    <div key={idx} id={`id-${idx}`} className='listitem'>
                        <div className="listitem-name">
                            <input type='checkbox' />
                            <label class="strikethrough" for='item'>{item.item}</label>
                        </div>
                        <div className='delete-button'>
                            <button onClick={() => removeOne(idx)} >&#x1F5D1;</button>
                        </div>
                    </div>
                )})}
            </>
            <div>
                <form className='listitem'>
                    <input className = 'new-item' type='text' placeholder="Add new item"/>
                    <button className='add-item'>+</button>
                </form>
            </div>
        </div>
    )
}

export default ToDo;


