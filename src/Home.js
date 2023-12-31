import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './userReducer';
const Home = () => {
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
dispatch(deleteUser({id:id}))

    }
  const users=useSelector((state)=>state.users);
//   console.log(users);
    return (
    <div className='container mt-4'>
<Link to="/create" className='btn btn-success'>Create +</Link>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`edit/${user.id}`} className='btn btn-secondary'>Edit</Link>
                            <button onClick={()=>handleDelete(user.id)} className='btn-danger btn'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home