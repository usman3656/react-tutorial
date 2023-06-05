import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HiTrash } from 'react-icons/hi';

function AdminUsers() {
  const [users,setUsers]=useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/admin/getAllUsers');
        setUsers(response.data.users);
        console.log(response.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className='bg-white m-3 border p-3'>
      <div className='m-3 fw-bold'>Users</div>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>Name</th>
            <th>phone</th>
            <th>address</th>
            <th>city</th>
            <th>country</th>
            <th>role</th>
            <th></th>
          </tr>          
        </thead>
        <tbody>
          {users.map((user,idx)=>(
            <tr key={idx}>
              <td>{idx+1}</td>
              <td>{user.username}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>{user.country}</td>
              <td>{user.role}</td>
              <td>
                <div className='btn'><HiTrash className='text-danger ' size={20}/></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminUsers