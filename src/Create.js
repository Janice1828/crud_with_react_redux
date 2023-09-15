import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { addUser } from './userReducer';
import { useNavigate } from 'react-router-dom';
const Create = () => {
const [name, setName]=useState("");
const [email, setEmail]=useState("");
const navigate=useNavigate();
const users=useSelector((state)=>state.users);
const dispatch=useDispatch();
// console.log(users[users.length-1].id+1);
const handleSubmit=(e)=>{
    e.preventDefault();
dispatch(addUser({id:users[users.length-1].id+1, name:name, email:email}));
navigate('/');
}
    return (
    <div className='container w-50'>
        <form className='d-flex gap-3 flex-column' onSubmit={handleSubmit}>
            <div>
                <label for="">Name</label>
                <input type="" name="name" value={name} className='form-control' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label for="">Email</label>
                <input type="" name="email" value={email} className='form-control' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <button type="" className='btn btn-success'>Submit</button>
            </div>

        </form>
    </div>
  )
}

export default Create