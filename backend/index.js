import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './mvc/DBcon/db.js';
import CrudRoutes from './mvc/routes/CrudRoutes.js';
import cors from 'cors';




dotenv.config();
const PORT=process.env.PORT || 7000;
dbConnection();
const app=express();
app.use(express.json());
app.use(cors());




app.listen(PORT, ()=>{
    console.log(`server is running: ${PORT}`);
});


app.use('/api', CrudRoutes);


