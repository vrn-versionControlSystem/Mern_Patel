import mongoose from 'mongoose';

const dbConnection=async()=>{

    try
    {
         const URL=process.env.MONGOSEATLAS_URL;
         await mongoose.connect(URL);
         console.log("Mongoose connected successfully...");   


    }
    catch(error)
    {
        
        console.log("Mongoose atlas is not connected due to : ", error);   


    }

}

export default dbConnection;