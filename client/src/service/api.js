import axios from 'axios';

const URL='http://localhost:8000';
export const addUser= async(data)=>{
    try{
      return await axios.post(`${URL}/add`,data);
    }catch(error){
        console.log("error occured",error);
    }
}

export const getUsers= async(data)=>{
  try{
    return await axios.get(`${URL}/all`);
  }catch(error){
     console.log("error occured",error);
  }
}

export const getUser=async(id)=>{
  try{
    return axios.get(`${URL}/${id}`)
  }catch(error){
    console.log('error while fetching the data',error)
  }
}
export const editUser=async(user, id)=>{
  try{
    return await axios.post(`${URL}/${id}`,user)
  }catch(error){
    console.log('error while editing the user',error)
  }
}
export const deleteUser=async(id)=>{
  try{
return await axios.delete(`${URL}/${id}`)
  }catch(error){
    console.log('error while deleting the user',error);
  }
}