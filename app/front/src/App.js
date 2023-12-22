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
        <h1>DATACRUD | Database Manager</h1>

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
      
      
      <div className='main-body-container'>
        <div className='pic'>
          <img src='img/johns-hopkins-university-1590925_640.jpg'/>
        </div>
      <div className='body-desc'>
      <h2>WHAT WE DO</h2>
      <p className='para-desc'>DATACRUD serves as a centralized repository for managing vast amounts 
      of information related to students, faculty, courses, departments, and various administrative 
      functions within the university ecosystem.</p>

      </div>
      </div>
    </div>
  );
}

export default App;
