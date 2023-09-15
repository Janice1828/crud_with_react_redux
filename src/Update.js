import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function Update() {
    const {id}=useParams();
    const users=useSelector((state)=>state.users);
    const existingUser=users.filter(f => f.id == id);
    const {name, email}=existingUser[0];
    const [uname, setName]=useState(name);
    const [uemail, setEmail]=useState(email);
  return (
<div className='container w-50'>
        <form className='d-flex gap-3 flex-column' >
            <div>
                <label for="">Name</label>
                <input type="" name="name" value={uname} className='form-control'/>
            </div>
            <div>
                <label for="">Email</label>
                <input type="" name="email" className='form-control' value={uemail} />
            </div>
            <div>
                <button type="" className='btn btn-success'>Update</button>
            </div>

        </form>
    </div>
  )
}

export default Update