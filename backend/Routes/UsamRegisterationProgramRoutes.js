import express from 'express';
import UsamRegisterationProgramController from '../controllers/UsamRegisterationProgramController.js';

const regesterationRouter = express.Router();

regesterationRouter.post("/register" , UsamRegisterationProgramController.createRegisterationData)

export default regesterationRouter;
