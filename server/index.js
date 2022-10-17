import dotenv from 'dotenv'
import express  from "express";
import mongoose from "mongoose";
import project from './Routes/projects.js'
import cors from 'cors';
const app = express();
dotenv.config()
app.use(cors())
app.use(express.json())
const port =process.env.PORT || 400
const URL = "mongodb+srv://qacle:7827@pro-managements.f368x9q.mongodb.net/?retryWrites=true&w=majority"

app.use('/api' , project)
app.listen(port , (console.log("running port " +port)))
mongoose.connect(URL,(console.log('Connection established')))