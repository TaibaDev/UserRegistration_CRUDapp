import mongoose from 'mongoose';

const Connection=async()=>{
    const URL ="mongodb://localhost:27017/crudApi"; 
    try{
      await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true});
      console.log('DB connected successfully !!!')
    }catch(error){
        console.log('DB connect error',error)
    }
}
export default Connection;