import PackingList from './PackingList';
import CreatePackingList from './CreatePackingList';
import {Route, Routes} from 'react-router-dom';
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
        console.log('list', list)
    };
    return(
        <Routes>
          <Route path='/' element={<CreatePackingList
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}/>}
                                    list={list}/>
          <Route path='/packinglist' element={<PackingList
                                        destination={list.destination}
                                        date1={list.date1}
                                        date2={list.date2}
                                        name={list.name}
                                            />}/>
        </Routes>
    )
}

export default Main;