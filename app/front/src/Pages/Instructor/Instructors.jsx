import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import './index.scss';

export const Instructors = () => {

  const [instructors, setInstructors] = useState([])
  useEffect(()=>{
    const getAllInstructors = async () =>{
      try{
        const res = await axios.get("http://localhost:8800/Instructor")
        setInstructors(res.data)
      }catch(err){
        console.log(err)
      }   
    }
    getAllInstructors()
  },[])

  const [instructor,addInstructor] = (useState) ({
    name: "",
    phone_number: "",
    email: "",
    address: "",
    office_location: "",
  })

  const handleChange = (e) => {
    addInstructor((prev) =>({...prev, [e.target.name]: e.target.value }));
  }

  const clickAddButton = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/Instructor", instructor)
    }catch(err){
      console.log(err.response.data);
    };
  
  }
  

return (
  <div>
      <hr/>

      <h2>Instructors</h2>
      <div className='container'>
     

      <table width='800'>
         <thead>
              <th>Name</th>
              <th>Phone Number</th>
              <th>E-Mail</th>
              <th>Address</th>
              <th>Office Location</th>
              <th></th>
         </thead>
         <tbody>
          {
              instructors.map((ins,index) =>{
                  return <tr key={index}>
                      <td>{ins.name}</td>
                      <td>{ins.phone_number}</td>
                      <td>{ins.email}</td>
                      <td className='address-fix'>{ins.address}</td>
                      <td className='address-fix'>{ins.office_location}</td>

                      <button>Delete</button>
                      <button>Update</button>
                  </tr>
             
              })
          }
         </tbody>
      </table>
      <div className='form-add'>
        <p>Add Instructors</p>
        <input type='text' placeholder='Name' onChange={handleChange} name='name' />
        <input type='number' placeholder='Phone Number' onChange={handleChange} name='phone_number'/>
        <input type='text' placeholder='E-Mail' onChange={handleChange} name='email'/>
        <input type='text' placeholder='Address' onChange={handleChange} name='address'/>
        <input type='text' placeholder='Office Location' onChange={handleChange} name='office_location'/>

        <button onClick={clickAddButton} className='add-data-button'>ADD</button>
      </div>
      </div>
    <hr/>   
  </div>
)
}
