const ToDo = (props)=>{
    console.log('todo props', props)
    let date2 = props.date2
    let date1 = props.date1
    let dateTwo = new Date(date2)
    let dateOne = new Date(date1)
    let difference = dateTwo.getTime() - dateOne.getTime()
    let days = difference / (1000 * 3600 * 24)
    console.log(days)
    return(
        <div>
            <h1>To Do</h1>
        </div>
    )
}

export default ToDo;