import{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Main = (props) => {
    const navigate = useNavigate()
    const [list, setList] = useState({
        destination:'',
        date1: '', 
        date2:'',
        name:''
    })

    const handleChange = (event) => {
        setList({...list,[event.target.name]: event.target.value})
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        navigate('/packinglist')
        console.log(list)
    };

    return(
        <div className='main'>  
            <div className='main-title'>
                <h2>Create your packing list</h2>
            </div>
                <form className='main-form' onSubmit={handleSubmit}>
                    <label>Destination</label>
                        <br/>
                            <input
                                className='main-input'
                                type='text'
                                name="destination"
                                value={list.destination}
                                placeholder='Where are you going?'
                                onChange={handleChange}/>
                        <br/>
                    <label>Travel Dates</label>
                        <br/>
                            <input
                                className='date-input'
                                type='date'
                                name='date1'
                                value={list.date1}
                                onChange={handleChange}
                                />
                                <input
                                className='date-input'
                                type='date'
                                name='date2'
                                value={list.date2}
                                onChange={handleChange}
                                />
                        <br/>
                    <label>List Name</label>
                        <br/>
                            <input
                                className='main-input'
                                type='text'
                                name="name"
                                value={list.name}
                                placeholder='Create your packing list'
                                onChange={handleChange}/>
                        <br/>
                    <input className='main-submit' type='submit' value='create packing list'/>
                </form>
                
        </div>
    )
}

export default Main;