
import mongoose from 'mongoose';

mongoose.set('strictQuery' , false);
export const connectDb = () => {
    mongoose.connect('mongodb://localhost:27017/app_dron', {} , (error) => {
            if(!error){
                console.log("Db running..")
            } else {
                console.log("Db not running..")
            }
    })
}