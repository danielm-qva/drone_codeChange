import express from 'express';
import { connectDb } from './config/mongoose_connect';
import dronRouter from './router/dron.router';

import { FillMedicament } from './config/fill.madicament';

// jobs
import { jobs } from './jobs/job.drone';

import env from 'dotenv'
env.config();

const app = express();
app.use(express.json())

//Router
app.use('/dron' , dronRouter);

app.listen( process.env.PORT || 3000 , () => {
    //connect db
    connectDb();
    
    // fill medicament
    FillMedicament();
    
    //jobs 
    jobs.start();
    console.log("Server in running");
})