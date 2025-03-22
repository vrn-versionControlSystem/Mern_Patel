import express from 'express';
import UserModel from '../model/UserModel.js';

export const register=async(req, resp)=>{
    try
    {
      const data=new UserModel(req.body);
      if(!data)
      {
            resp.send("!...data is empty not save is database");
      }
      else
      {
          await data.save(); 

           resp.send("Data Save Successfully"); 
      }

    }
    catch(error)
    {
        resp.send("!...data is not save is database");
    }
}
//----------------------------------------------------------------------------------get
export const getAllData=async(req, resp)=>{
    try
    {
      const fetched_data= await UserModel.find();  
      
      if(!fetched_data)
      {
            resp.json("!...No data is available in database");
      }
      else
      {
          resp.json(fetched_data); 
      }

    }
    catch(error)
    {
        resp.json("internal server error");
    }
}

//----------------------------------------------------------------------------------get
export const getById=async(req, resp)=>{

    try
    {
      const ID=req.params.id;

      const exist_data= await UserModel.findById({_id:ID});
        
      if(!exist_data)
      {
            resp.json("!...No data is available in database");
      }
      else
      {
          resp.json(exist_data); 
      }

    }
    catch(error)
    {
        resp.json("internal server error");
    }
}
//----------------------------------------------------------------------------------get
export const updateData=async(req, resp)=>{
    
    try
    {
        const ID=req.params.id;

        const fetched_data= await UserModel.findById({_id:ID});  
      
      if(!fetched_data)
      {
            resp.json("!...No data is available in database");
      }
      else
      {
         const updateData= await UserModel.findByIdAndUpdate(ID, req.body, {new:true});  
         resp.json("Data is updated");  

      }

    }
    catch(error)
    {
        resp.json("internal server error");
    }
}

//----------------------------------------------------------------------------------get
export const deleteData=async(req, resp)=>{
    
    try
    {
        const ID=req.params.id;

        const deleted= await UserModel.findByIdAndDelete(ID);    
      
      if(!deleted)
      {
            resp.json("!...No data is available in database");
      }
      else
      {
          
         resp.json("Data is deleted Successfully");  

      }

    }
    catch(error)
    {
        resp.json("internal server error");
    }
}
