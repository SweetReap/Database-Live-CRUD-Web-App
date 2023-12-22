import React from 'react';
import './index.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


export const Students = () => {

    const [students, setStudents] = useState([]) //load students into frontend table
    useEffect(()=>{
      const getAllStudents = async () =>{
        try{
          const res = await axios.get("http://localhost:8800/Student")
          setStudents(res.data)
        }catch(err){
          console.log(err)
        }   
      }
      getAllStudents()
    },[])

    const [student,addStudent] = (useState) ({ //initialize input values
      f_name: "",
      m_init: "",
      l_name: "",
      major: "",
      email: "",
      phone: "",
      address: "",
    })

    const handleChange = (e) => { //adding value of input by user input
      addStudent((prev) =>({...prev, [e.target.name]: e.target.value }));
    }

    const handleUpdate = (e) => {
      try {
        
      } catch (err) {
        console.log(err);
      }
    }

    const handleDelete = async(index) =>{ //delete the selected data
      try{
        await axios.delete("http://localhost:8800/Student/" + index)
        window.location.reload()
      }catch (err){
        console.log(err);
      }
    }

    const clickAddButton = async (e) => { //adds student to database, restart page to see results
      e.preventDefault();
      try{
        await axios.post("http://localhost:8800/Student", student)
      }catch(err){
        console.log(err.response.data);
      };
      alert('Student has been created. Click on \"Update Data\", or reload the page to update the table.');
    }
    

  return (
    <div>
        <hr/>

        <h2>Students</h2>
        <div className='container'>
  
        <table width='800'>
           <thead>
                <th>Legal Name</th>
                <th>Major</th>
                <th>E-Mail</th>
                <th>Home Phone Number</th>
                <th>Address</th>
                <th></th>
           </thead>
           <tbody>
            {
                students.map((stu,index) =>{
                    return <tr key={index}>
                        <td>{stu.f_name} {stu.m_init} {stu.l_name}</td>
                        <td>{stu.major}</td>
                        <td>{stu.email}</td>
                        <td>{stu.phone}</td>
                        <td className='address-fix'>{stu.address}</td>

                        <button onClick={()=>handleDelete(stu.emplid)}>Delete</button>
                        <button onClick={()=>handleUpdate(stu.emplid)}>Update</button>
                    </tr>               
                })
            }
           </tbody>
        </table>
        <div className='form-add'>
          <p>Add Student</p>
          <input type='text' placeholder='First Name' onChange={handleChange} name='f_name' />
          <input type='text' placeholder='Middle Name' onChange={handleChange} name='m_init' />
          <input type='text' placeholder='Last Name' onChange={handleChange} name='l_name' />
          <input type='text' placeholder='Major' onChange={handleChange} name='major'/>
          <input type='text' placeholder='E-Mail' onChange={handleChange} name='email'/>
          <input type='number' placeholder='Phone' onChange={handleChange} name='phone'/>
          <input type='text' placeholder='Address' onChange={handleChange} name='address'/>

          <button onClick={clickAddButton} className='add-data-button'>ADD</button>
        </div>

        </div>
      <hr/>   
    </div>
  )
}
