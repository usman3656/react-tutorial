import React, { useEffect, useState } from 'react';
import ProfileImage from '../profile.jpg';
import { AiOutlineClose } from 'react-icons/ai';

function Profile() {
  const UserName= 'Usman Ghani Bawany';
  const [data, setData] = useState({
    firstName: 'Usman',
    lastName: 'Ghani Bawany',
    userName: 'usman420@gmail.com',
    phone: 8457926529,
    address: 'IBA,Maskan',
    city: 'Karachi',
    country: 'Pakistan',
    role: 'User'
  });
  return (
    <div className='col-8 offset-2'>      
      <div className='bg-light border-top border-success border-4'>
        <h3 className='fw-bold m-3 py-2 text-center'> User Profile: </h3>
        <div className='d-flex text-center'>
          <div className='col-4'>
            <img src={ProfileImage} alt={UserName} className='rounded-circle'/>
            <h4 className='mt-3'>{UserName}</h4>
            <h5 className='text-secondary'>{data.role}</h5>
          </div>
          <div className='col-8 offset-md-1'>
            <div className='d-flex col-8 mt-2'>
              <label className='mx-2 text-end'>FirstName: </label>
              <input className='ms-1 form-control' defaultValue={data.firstName}></input>
            </div>
            <div className='d-flex col-8 mt-2'>
              <label className='mx-2'>LastName: </label>
              <input className='ms-1 form-control' defaultValue={data.lastName}></input>
            </div>
            <div className='d-flex col-8 mt-2'>
              <label className='mx-2'>Username: </label>
              <input className='ms-1 form-control' defaultValue={data.userName}></input>
            </div>
            <div className='d-flex col-8 mt-2'>
              <label className='mx-2 pe-4'>Phone:</label>
              <input className='ms-1 form-control' defaultValue={data.phone}></input>
            </div>
            <div className='d-flex col-8 mt-2'>
              <label className='mx-2 pe-3'>Address: </label>
              <input className='form-control' defaultValue={data.address}></input>
            </div>
            <div className='d-flex col-8 mt-2'>
              <label className='mx-2 pe-5'>City: </label>
              <input className='form-control' defaultValue={data.city}></input>
            </div>
            <div className='d-flex col-8 mt-2'>
              <label className='mx-2 pe-3'>Country: </label>
              <input className='form-control' defaultValue={data.country}></input>
            </div>
            <div className='d-flex justify-content-end col-5 ms-5 mt-4'>
                <button type='button' className='btn btn-success ms-auto px-5' data-bs-toggle="modal" data-bs-target="#exampleModal"> Update </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body d-flex">                            
                            <h1 className="modal-title fs-5 fw-bold col-11 my-4" id="exampleModalLabel">Profile updated successfully!</h1>                                                    
                            <a href='#' className='text-black col-1 text-end'><AiOutlineClose size={20} data-bs-dismiss="modal"/></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile