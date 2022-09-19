import praticalProject from '../models/Users.js'
export const user = async(req, res)=>{
   try{
    const person = await praticalProject(req.body).save()
    console.log(req.body)
    res.send({status:true,msg:person})
   }
   catch(err){
    console.log(err);
   }
}
export const updateUser = async(req, res)=>{
    try{
        const{_id ,itemName,dexription, price,company} = req.body;
        const updated = await praticalProject.findByIdAndUpdate(_id,{itemName,dexription, price,company})
        res.send({status:true, msg:updated})
    }catch(err){
        console.log(err);
    }
}
export const deleteUser = async(req, res)=>{
    try{
        const{_id} = req.params;
        const deleted = await praticalProject.findByIdAndDelete(_id)
        res.send({status:true,deleted})
    }catch(err){
        console.log(err);
    }
}
export const singlePerson = async(req, res)=>{
    try{
        const{_id} = req.params;
        const single = await praticalProject.findById(_id)
        res.send({status:true, message:single})
    }catch(err){
        console.log(err);
    }
}
export const selectAll = async(req, res)=>{
    try{
        const getAll = await praticalProject.find().sort({"createdAt":-1})
        res.send({status:true, message:getAll})
    }catch(err){
        console.log(err);
    }
}