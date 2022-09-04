import React,{useState, useEffect} from 'react'
import {useNavigate, useParams,Link} from 'react-router-dom';
import {FormGroup, FormControl, InputLabel, Input, Typography, styled, Button} from '@mui/material';
import { editUser, getUser } from '../service/api';
const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
&>div{
    margin-top: 20px;
}
&>div>Button{
    background: green;
    color:white;
    font-weight: bold;
    text-decoration:none;;
}
`
;

const defaultValue={
    name:"",
    username:"",
    email:"",
    phone:""
};

const EditUser = () => {
    const navigate=useNavigate();

    const {id}=useParams();
    useEffect(()=>{
        loadUserDetails();
    },[])
    const loadUserDetails=async()=>{
       const response=await getUser(id);
       setUser(response.data);
    }

    const[user,setUser]=useState(defaultValue)
    const eventChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const editUserDetails=async()=>{
        await editUser(user, id);
        navigate('/all');
    }
  return (
    <Container>
        <Typography Varient="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>{eventChange(e)}} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>User Name</InputLabel>
            <Input onChange={(e)=>{eventChange(e)}} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>{eventChange(e)}} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>{eventChange(e)}} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button varient="contained" component={Link} to="/all" onClick={()=>editUserDetails()}>Update User</Button>
        </FormControl>
    </Container>
  )
}

export default EditUser;