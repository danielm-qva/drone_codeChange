import mongoose from 'mongoose';

mongoose.set('strictQuery' , false);

import 'dotenv/config'

const {MONGO_DB_URL , MONGO_DB_URI_TEST , NODE_ENV}  = process.env;
const connectionURL = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URL
   
export const connectDb = () => {
     return  mongoose.connect(connectionURL + 'app_dron', {});
}