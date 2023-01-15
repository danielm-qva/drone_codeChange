import { getALL, addDron, getAllId, updateDrone, deleteDrone , getAllDroneXMedicament } from './../controller/dron.controller';
import { Router } from "express";

const dronRouter = Router();

dronRouter.get('/', getALL);
dronRouter.post('/' , addDron);
dronRouter.get('/medic',getAllDroneXMedicament)
dronRouter.get('/:id', getAllId)
dronRouter.put('/:id', updateDrone)
dronRouter.delete('/:id', deleteDrone)

export default dronRouter;