import mongoose  from 'mongoose';
const userSchema = new mongoose.Schema({
    itemName:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    company:{
        type:String
    },
} , {timestamps:true})
const praticalProject = mongoose.model('Project' , userSchema)
export default praticalProject