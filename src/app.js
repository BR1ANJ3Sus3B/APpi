import express from 'express';
import morgan from 'morgan';
import ejs from 'ejs';
import electronicaRoutes from './routes/electronica.Routes.js';
const app=express();

app.set('port',process.env.PORT||3000);

app.set('view engine',ejs);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/electronica",electronicaRoutes);
export default app;
