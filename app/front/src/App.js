import './main-page-css/App.scss';
import {render} from 'react-dom';

import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Update } from './Pages/Update';
import { Add } from './Pages/Add';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



import { Students } from './Pages/Student/Students';
import { Instructors } from './Pages/Instructor/Instructors';


function App() {

  const reloadData = (e) =>{
    e.preventDefault();
    window.location.reload(false); //very cheap way to reload data
  }

  return (

    <div className="App">
      <header className="App-header">
        <h1>Database Front-End</h1>
        <p>computer_science_department</p>
        <nav> 
          <BrowserRouter>
            <Routes>
              <Route path='/add' element = {<Add/>} />
              <Route path='/update' element = {<Update/>} />
              <Route path='/students' element = {<Students />} />
              <Route path='/instructors' element = {<Instructors />} />
            </Routes>
          </BrowserRouter>
        </nav>
      </header>
      
      <div className='reload'>
          <h2>Update Data</h2>
        <button className='reload-button' onClick={reloadData}>UPDATE DATA</button>
      </div>
      <div className='main-container'>
        <Students />
        <Instructors />
      
      </div>
    </div>
  );
}

export default App;
