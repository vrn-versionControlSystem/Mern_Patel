import axios from 'axios';

export const getalldata=async()=>{

   return await axios.get("http://localhost:8000/api/getalldata");

}
// localhost:8000/api/update/67de4bd7214b695a6ac1cad7

export const updateData=async(data)=>{

   return await axios.put(`localhost:8000/api/update/${data.id}`, data);
}