import mongoose from 'mongoose';

import {Request , Response} from 'express';
import dronModels from '../models/dron.models';

export const getALL = async (req: Request , res: Response) => {
       const listDrone =  await dronModels.find(req.query);
       res.status(200).json({listDrone});
}
export const addDron = async (req: Request , res: Response) => {
       const {model,weight,baterry,state , medicaments} = req.body;
       const createDrone = await dronModels.create({model,weight , baterry,state ,medicaments}).then().catch((error) => {
              res.status(400).json({"Error" : error.errors});
       });
       res.status(200).json({createDrone});
     
}

export const getAllId = async (req: Request , res: Response) => {
       const id = req.params['id'];
       const findDrone = await dronModels.findById(id).then().catch((error)=> {
              res.status(400).json({"Error" : error});
       });
       if(findDrone){
              res.status(200).json({findDrone});
       }
}

export const deleteDrone = async (req: Request , res: Response) => {
       const id = req.params['id'];
       try {
              const delteDrone =  await dronModels.findByIdAndRemove(id);
              if(delteDrone){
                     res.status(200).json(delteDrone);
                  }
       } catch (error) {
              res.status(400).json({error});
       }
}

export const updateDrone = async (req: Request , res: Response) => {
       const id = req.params['id'];
       const droneupdate =  await dronModels.findByIdAndUpdate(id , req.body , {new : true , upsert: true});
        if(droneupdate){
               res.status(200).json({droneupdate});
        }
        else{
              res.status(400).json({"mensaje" : "Not fount"});
        }
     
}

export const getAllDroneXMedicament = async (req: Request , res: Response) => {
       const resul = await dronModels.aggregate([
          {
              $lookup:{
                  from: "medications",
                  let: {
                        medicament: "$medicaments"
                      },
                  pipeline:[
                      {
                          $match: {
                             $expr:{
                                 $in:['$name','$$medicament']
                              }
                          }
                      }
                  ] ,
                  as: "medic"

              }
          }
       ])
       
       res.status(200).json(resul);
}

export const getDroneByIdandMedicament = async (req: Request , res: Response) => {
       const id = req.params['id'];
       const result = await dronModels.aggregate([
             {
              $lookup:{
                     from: "medications",
                     let: {
                           medicament: "$medicaments"
                         },
                     pipeline:[
                         {
                             $match: {
                                $expr:{
                                    $in:['$name','$$medicament'],
                                 }
                             }
                         }
                     ] ,
                     as: "medic"
                 }

              },
              {
                $match : {
                     _id : mongoose.Types.ObjectId(id)
                }
              }
       ])
       res.status(200).json(result);
}

