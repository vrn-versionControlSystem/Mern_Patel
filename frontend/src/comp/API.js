import axios from 'axios';

export const getalldata=async()=>{

   return await axios.get("https://mern-patel.onrender.com/api/getalldata");

}
// localhost:8000/api/update/67de4bd7214b695a6ac1cad7

export const updateData=async(data)=>{

   return await axios.put(`https://mern-patel.onrender.com/api/update/${data.id}`, data);
}