import mongoose from "mongoose";

const medication = new mongoose.Schema({
     name: {
        type: String
     },
     weight: {
        type: Number
     },
     code: {
        type: String
     },  
} ,
  {
    timestamps: true,
    versionKey: false
  })


export default mongoose.model('medication' , medication);