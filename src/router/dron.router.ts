import { getALL, addDron, getAllId, updateDrone, deleteDrone , getAllDroneXMedicament, getDroneByIdandMedicament } from './../controller/dron.controller';
import { Router } from "express";

const dronRouter = Router();

dronRouter.get('/', getALL);
dronRouter.post('/' , addDron);
dronRouter.get('/medic',getAllDroneXMedicament)
dronRouter.get('/:id', getAllId)
dronRouter.get('/:id/medic', getDroneByIdandMedicament)
dronRouter.delete('/:id', deleteDrone)
dronRouter.put('/:id', updateDrone)

export default dronRouter;