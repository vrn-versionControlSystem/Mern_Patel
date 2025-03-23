import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Update = () => {
    
  const {id}=useParams();

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
  
  useEffect(()=>{

    const fetched_data=async()=>{

      const response= await axios.get(`https://mern-patel.onrender.com/api/getbyid/${id}`);

      setNewObj(response.data);

    }

    fetched_data();

  }, []);




  const submitForm=async(event)=>{
    event.preventDefault();

    await axios.put(`https://mern-patel.onrender.com/api/update/${id}`, newObj)
    .then((resp)=>{
      
      console.log(resp);
      
      
      alert("Data Save Successfully");
      navigate('/');

    })
    .catch((error)=>{alert("error");});
    
   
  }


  return (
    <div>Update


  <form onSubmit={submitForm}>


      <table>
      <tbody>
        <tr>
        <td>Full Name :</td>
          <td><input type='text' placeholder='enter full name'
            name='fullname'
            value={newObj.fullname}
            onChange={addHandler}
           />  </td>
        </tr>
        <tr>
        <td>City :</td>
          <td><input type='text' placeholder='enter city name' 
          name='city'
          value={newObj.city}
          onChange={addHandler}
          />  </td>
        </tr>
        <tr>
        <td>Gender :</td>
          <td><input type='text' placeholder='enter Gender'
           name='gender' value={newObj.gender}
           onChange={addHandler}
           />  </td>
        </tr>
        <tr>
        <td>Age:</td>
          <td><input type='text' placeholder='enter Age'
           name='age' value={newObj.age}
           onChange={addHandler}
           />  </td>
        </tr>
        <tr>
        <td>Mobile no:</td>
          <td><input type='text' placeholder='enter mobile number'
           name='mobile' value={newObj.mobile}
           onChange={addHandler}
          />  </td>
        </tr>
        <tr>
        <td></td>
          <td> <button type='submit'>Update</button>  </td>
          
        </tr>
       
        </tbody>
      </table>
     
    
  </form>
    
   

    </div>
  )
}

export default Update