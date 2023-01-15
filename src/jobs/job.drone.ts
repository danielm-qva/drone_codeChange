import { LogDronInterface } from './../interface/log.drone.interface';
import cron from 'node-cron';
import fs from 'fs';
import shell  from 'shelljs';

import dronModels from '../models/dron.models';

shell.mkdir(__dirname + '/log')
shell.cd(__dirname + '/log');

 export const jobs = cron.schedule('* * * * *' , async () => {
        
       const date = new Date().toDateString();
       const logDate: LogDronInterface[] = [];

        const drones = await dronModels.find();
           const parseDrones = JSON.stringify(drones)
         drones.forEach(item => {
              console.log
         })

          shell.mkdir(__dirname + `/log/${date}-Log`)
          shell.cd(__dirname + `/log/${date}-Log` );
          //`touch ${new Date}.json`
          shell.exec(`touch loog.json`);
          JSON.stringify(logDate);
        fs.writeFileSync(__dirname + `/log/${date}-Log/loog.json` , parseDrones);
 })