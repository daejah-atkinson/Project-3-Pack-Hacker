

const CreatePackingList = (props) =>{
    console.log('create', props)
    return(
        <div className='main'>  
            <div className='main-title'>
                <h2>Create your packing list</h2>
            </div>
                <form className='main-form' onSubmit={props.handleSubmit}>
                    <label>Destination</label>
                        <br/>
                            <input
                                className='main-input'
                                type='text'
                                name="destination"
                                // value={props.list.destination}
                                placeholder='Where are you going?'
                                onChange={props.handleChange}/>
                        <br/>
                    <label>Travel Dates</label>
                        <br/>
                            <input
                                className='date-input'
                                type='date'
                                name='date1'
                                // value={props.list.date1}
                                onChange={props.handleChange}
                                />
                                <input
                                className='date-input'
                                type='date'
                                name='date2'
                                // value={props.list.date2}
                                onChange={props.handleChange}
                                />
                        <br/>
                    <label>List Name</label>
                        <br/>
                            <input
                                className='main-input'
                                type='text'
                                name="name"
                                // value={props.list.name}
                                placeholder='Create your packing list'
                                onChange={props.handleChange}/>
                        <br/>
                    <input className='main-submit' type='submit' value='create packing list'/>
                </form>
                
        </div>
    )
}

export default CreatePackingList;