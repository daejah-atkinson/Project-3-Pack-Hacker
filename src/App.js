import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PackingList from './components/PackingList';
import{Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/packinglist' element={<PackingList/>}/>
        </Routes>
    
     
    </div>
  );
}

export default App;
