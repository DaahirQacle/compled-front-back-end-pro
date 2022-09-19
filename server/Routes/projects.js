import express  from "express";
import { deleteUser, selectAll, singlePerson, updateUser, user } from "../Controlls/users.js";

const route = express.Router()
route.post('/post',user)
route.post('/update' , updateUser)
route.delete('/delete/:_id' , deleteUser)
route.get('/selection/:_id' , singlePerson)
route.get('/selectionAll' , selectAll)
export default route