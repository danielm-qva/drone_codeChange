import mongoose from "mongoose";

const Drone = new mongoose.Schema({
    model: {
          type: String,
          enum: ['Lightweight' ,'Middleweight' ,'Cruiserweight' ,'Heavyweight'],
          required: true
    },
    weight: {
        type:Number ,
        max: 500,
        required : true
    },
    baterry:{
          type: Number,
          max: 100,
          required: true
    },
    state: {
        type:String,
        enum: ['IDLE', 'LOADING' , 'LOADED' ,'DELIVERING' , 'DELIVERED' , 'RETURNING'],
        required : true
    },
    medicaments: {
        type: Array,
        default:[]
    }   
} , {
    timestamps: true,
    versionKey: false
})

export default mongoose.model("Drone" , Drone);