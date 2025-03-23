import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import './All.css';


const Add = () => {

  const notify=()=>{
    toast.success("Data is added successfully");
  }

  const obj={
    fullname:"",
    age:"",
    gender:"",
    mobile:"",
    city:""
  };

  const [newObj, setNewObj]=useState(obj);
  const navigate=useNavigate();

  const addHandler=(event)=>{

    const {name, value}=event.target;
    setNewObj({...newObj, [name]:value});  

  }

  const submitForm=async(event)=>{
    event.preventDefault();

    await axios.post("https://mern-patel.onrender.com/api/register", newObj)
    .then((resp)=>{
      
      console.log(resp);
      
      
     // alert("Data Save Successfully");
      notify();
      navigate('/');
     

    })
    .catch((error)=>{alert("error");});
    
   
  }


  return (
    <div className='Add'>

    <h3>Add Data</h3>

  <form onSubmit={submitForm}>


      <table>
      <tbody>
        <tr>
        <td>Full Name :</td>
          <td><input type='text' placeholder='enter full name'
          name='fullname'
            onChange={addHandler}
           />  </td>
        </tr>
        <tr>
        <td>City :</td>
          <td><input type='text' placeholder='enter city name' 
          name='city'
          onChange={addHandler}
          />  </td>
        </tr>
        <tr>
        <td>Gender :</td>
          <td><input type='text' placeholder='enter Gender'
           name='gender'
           onChange={addHandler}
           />  </td>
        </tr>
        <tr>
        <td>Age:</td>
          <td><input type='text' placeholder='enter Age'
           name='age'
           onChange={addHandler}
           />  </td>
        </tr>
        <tr>
        <td>Mobile no:</td>
          <td><input type='text' placeholder='enter mobile number'
           name='mobile'
           onChange={addHandler}
          />  </td>
        </tr>
        <tr>
        <td></td>
          <td> <button type='submit'>Submit</button> </td>
          
        </tr>
       
        </tbody>
      </table>
     
    
  </form>
    
   
  <ToastContainer /> 
    </div>
  )
}

export default Add