import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './mvc/DBcon/db.js';
import CrudRoutes from './mvc/routes/CrudRoutes.js';
import cors from 'cors';
import path from 'path';



dotenv.config();
const PORT=process.env.PORT || 7000;
dbConnection();
const app=express();
app.use(express.json());
app.use(cors());
const _dirname=path.resolve();





app.listen(PORT, ()=>{
    console.log(`server is running: ${PORT}`);
});


app.use('/api', CrudRoutes);
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req, resp)=>{
    resp.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html" ));

});


