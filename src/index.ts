
import app from './config/server.config';
import { FillMedicament } from './config/fill.madicament';

// jobs
import { jobs } from './jobs/cron.drone';
import { job_check_baterry } from './jobs/cron.drone_check_baterry';

import 'dotenv/config';
    
const port = process.env.PORT || 4000 ;

app.listen(4000 , () => {
    // fill medicament
    FillMedicament();    
    //jobs 
    jobs.start();
    // Jobs check baterry 
    job_check_baterry.start();

    console.log(`Server in running in port ${port}`);
})

