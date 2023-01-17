import express  from "express";
import dronRouter from '../router/dron.router';
import { connectDb } from "./mongoose_connect";


const app = express();

app.use(express.json());

//connect db
connectDb().then(() => {console.log("Db is connect")}).catch((error) => {console.log("not connectin SB" , error)});

//Router
app.use('/dron' , dronRouter);

export default app ;