
import User from '../schema/user-schema.js';

export const addUser=async(req, res)=>{
    const user=req.body;
const newUser= new User(user);

try{
    await newUser.save();
    res.status(201).json(newUser);
}catch(err){
    res.status(409).josn({message:err.message})
}

}
export const getUsers=async(req, res)=>{
try{
    const users= await User.find({});
    res.status(200).json(users);
}catch(err){
    res.status(404).json({message: err.message});
    }
}

export const getUser=async(req, res)=>{
    try{
        const users=await User.findById(req.params.id);
        res.status(200).json(users);
    }catch(error){
        console.log('error during updating')
    }
}

export const editUser=async(req,res)=>{
    let user = req.body;
    const editUser = new User(user);
    try{
        await User.updateOne({_id:req.params.id}, editUser);
    }catch(error){
        res.status(409).josn({message: error.message});
    }
}
export const deleteUser=async(req,res)=>{
    try{
        await User.deleteOne({_id:req.params.id});
        res.status(200).json({message:'user deleted successfully'});
    }catch(error){
        res.status(409).json({message:error.message})
    }
}