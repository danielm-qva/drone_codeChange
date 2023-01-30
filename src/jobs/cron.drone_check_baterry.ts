import cron from 'node-cron' 
import dronModels from '../models/dron.models';


export const job_check_baterry = cron.schedule('30 * * * * *', async () => {
    
    const listdron = await dronModels.find().where('baterry').gt(0).lte(25);
         listdron.forEach( async (item : any) => {
               if(item.state !== 'LOADING'){
                  const a = await dronModels.findByIdAndUpdate(item._id ,{'state': "LOADING"});
               }
         })      
})
