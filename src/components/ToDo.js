const ToDo = (props)=>{
    let date2 = props.date2
    let date1 = props.date1
    let dateTwo = new Date(date2)
    let dateOne = new Date(date1)
    let difference = dateTwo.getTime() - dateOne.getTime()
    let days = difference / (1000 * 3600 * 24)
    return(
        <div className='listitem-container'>
            <div className='list-header'>
            <h1 >To Do</h1>
            <p className='todo-p'>Things to do before your {days} day trip:</p>
            </div>
            <div className='listitem'>
                <input type='checkbox' />
                <label class="strikethrough" for='item'> Water the plants</label>
            </div>
            <div className='listitem'>
                <input type='checkbox' />
                <label class="strikethrough" for='item'> Clean out the fridge</label>
            </div>
            <div className='listitem'>
                <input type='checkbox' />
                <label class="strikethrough" for='item'> Charge electronic devices</label>
            </div>
            <div className='listitem'>
                <input type='checkbox' />
                <label class="strikethrough" for='item'> Pause the mail</label>
            </div>
            <div className='listitem'>
                <input type='checkbox' />
                <label class="strikethrough" for='item'> Online Check-in</label>
            </div>
        </div>
    )
}

export default ToDo;