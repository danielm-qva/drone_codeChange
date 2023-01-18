import { LogDronInterface } from '../interface/log.drone.interface';
import cron from 'node-cron';
import fs from 'fs';
import shell  from 'shelljs';

import dronModels from '../models/dron.models';

shell.mkdir(__dirname + '/log')
shell.cd(__dirname + '/log');

 export const jobs = cron.schedule('0 0 * * *' , async () => {
        
       const date = new Date().toDateString();
       const logDate: LogDronInterface[] = [];

        const drones = await dronModels.find();
         drones.forEach((item: any) => {
              logDate.push({
                  id: item._id,
                  model: item.model,
                  baterry: item.baterry
              })
         })
          shell.mkdir(__dirname + `/log/${date}-Log`)
          shell.cd(__dirname + `/log/${date}-Log` );
         //`touch ${new Date}.json`
          shell.exec(`touch LOG.json`);
          const result = JSON.parse(JSON.stringify(logDate));
        fs.writeFileSync(__dirname + `/log/${date}-Log/LOG.json` , JSON.stringify(result));
 })