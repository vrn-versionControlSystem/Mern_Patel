import express from 'express';
import { getAllData, getById, register, updateData, deleteData } from '../controller/CrudController.js';

const CrudRoutes=express.Router();

CrudRoutes.post('/register', register);
CrudRoutes.get('/getalldata', getAllData);
CrudRoutes.get('/getbyid/:id', getById);
CrudRoutes.put('/update/:id', updateData);
CrudRoutes.delete('/deletebyid/:id', deleteData);

export default CrudRoutes;
