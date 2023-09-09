import React from 'react'
import { useState } from 'react'
const Create = () => {
const [name, setName]=useState("");
const [email, setEmail]=useState("");
const handleSubmit=(e)=>{
    e.preventDefault();
}
    return (
    <div className='container w-50'>
        <form className='d-flex gap-3 flex-column' onSubmit={handleSubmit}>
            <div>
                <label for="">Name</label>
                <input type="" name="name" value="" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label for="">Email</label>
                <input type="" name="email" value="" className='form-control' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <button type="" className='btn btn-success'>Submit</button>
            </div>

        </form>
    </div>
  )
}

export default Create