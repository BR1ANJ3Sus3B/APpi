import { Router } from 'express';
import electronicaController from '../controllers/electronica.controller.js';
const electronicaRoutes = Router();

electronicaRoutes.get ('/getAll',electronicaController.getAll);
electronicaRoutes.get('/getOne/:electronica_Id',electronicaController.getOne);
electronicaRoutes.post('/insert',electronicaController.insert);
electronicaRoutes.post('/updateOne/:electronica_Id',electronicaController.updateOne);
electronicaRoutes.get('/deleteOne/:electronica_Id',electronicaController.deleteOne);
export default electronicaRoutes ;