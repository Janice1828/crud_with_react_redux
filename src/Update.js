import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './userReducer';

function Update() {
    const {id}=useParams();
    const users=useSelector((state)=>state.users);
    const existingUser=users.filter(f => f.id == id);
    const {name, email}=existingUser[0];
    const navigate=useNavigate();
    const [uname, setName]=useState(name);
    const [uemail, setEmail]=useState(email);
    const dispatch=useDispatch();
    const handleUpdate=(event)=>{
        event.preventDefault(); 
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail
        }))
        navigate("/");
    }
  return (
<div className='container w-50'>
        <form className='d-flex gap-3 flex-column' onSubmit={handleUpdate}>
            <div>
                <label for="">Name</label>
                <input type="" name="name" value={uname} className='form-control' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label for="">Email</label>
                <input type="" name="email" className='form-control' value={uemail} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <button type="" className='btn btn-success'>Update</button>
            </div>

        </form>
    </div>
  )
}

export default Update