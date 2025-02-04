import { Router } from 'express';
import electronicaController from '../controllers/electronicaController.js';

import electronicaDao from '../DAO/electronicaDao.js';

const electronicaRoutes = Router();

electronicaRoutes.get ('/getAll',electronicaController.getAll);
electronicaRoutes.get('/getOne/:electronica_id',electronicaController.getOne);
electronicaRoutes.post('/insert',electronicaController.Insert);
electronicaRoutes.post('/updateOne/:electronica_id',electronicaController.updateOne);
electronicaRoutes.get('/deleteOne/:electronica_id',electronicaController.deleteOne);
export default electronicaRoutes ;