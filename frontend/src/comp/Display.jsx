import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { getalldata } from './API.js';
import {Link } from 'react-router-dom';
import axios from 'axios';


const Display = () => {


    const notify=()=>{

   
        toast.success('Data is Deleted successfully'); 
    
      }
      const addNotify=()=>{

   
        toast.success('Data is ADD  successfully'); 
    
      }
//---------------------------------------------------------------------------------------------------------
     const [dataList, setDataList]=useState([]); 

      useEffect(()=>{

        getalldata().then((result)=>{

          setDataList(result.data);
          
        }).catch((error)=>{

          console.log(error);
        });

        addNotify();
      },[]);

      
const deleteHandler=async(id)=>{

  await axios.delete(`http://localhost:8000/api/deletebyid/${id}`).then((resp)=>{

   
    
    setDataList((oldData)=>oldData.filter((data)=>data._id!==id));
    notify();
  

  }).catch((error)=>{

    console.log(error);
  
  });

 
}
      




//---------------------------------------------------------------------------------------------------------

  return (
    <div className='Display'>
   

    <table>
      <thead>
        <tr>
          <th>sr no.</th>
          <th>Full Name</th>
          <th>City</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Mobile no</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
          dataList.map((item, index)=>{

              return(
                <tr key={index}>
                <td>{index+1}</td>
                  <td>{item.fullname}</td>
                  <td>{item.city}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                  <td>{item.mobile}</td>
                  <td><Link to={"/update/"+item._id}>update</Link> | <button onClick={()=>deleteHandler(item._id)}>delete</button></td>

                </tr>
              )

          })

      }
      

        
      </tbody>
    </table>

    <button onClick={notify}>Notify!</button>

    <ToastContainer />  

  </div>


  )
}

export default Display