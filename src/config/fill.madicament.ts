import { medicamentInterface } from './../interface/medicament.interface';
import medicationModels from "../models/medication.models"

const data: medicamentInterface[] = [
    {
        name: "medicam_1",
        weight: 25,
        code: "aa_1"
    },
    {
        name: "medicam_2",
        weight: 50,
        code: "aa_2"
    },
    {
        name: "medicam_3",
        weight: 75,
        code: "aa_3"
    },
    {
        name: "medicam_4",
        weight: 125,
        code: "aa_4"
    }
]

export const FillMedicament = async () => {
    const count = await medicationModels.find();
     if(count.length < 0){
         medicationModels.insertMany(data);
     }
} 