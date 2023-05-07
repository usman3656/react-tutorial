import React, { useState } from 'react';
import profile from "../../../profile.jpg";
import {AiOutlinePlus,AiOutlineShopping} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {HiOutlineShoppingBag} from 'react-icons/hi'


function Header() {
    
    const {search,setSearch}=useState(); // will be used for search bar
    const [isSell, setIsSell] = useState(true);
    const handleClick = () => {
        setIsSell(!isSell);
      }; 

  return (
    <div className='header'>
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid d-flex justify-content-start">
                <a className="navbar-brand" href='#'>New2U</a> {/*LOGO image will be added here*/}
                <form className="d-flex offset-1 me-auto" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <Link to={isSell?'seller':''}>
                    <button className='btn btn-success rounded-pill me-3 d-flex pe-4' onClick={handleClick}>
                        {isSell?<AiOutlinePlus size={30} className='me-2'/>:<AiOutlineShopping size={30} className='me-2'/>}
                        {isSell?'SELL':'BUY'}                     
                    </button> 
                </Link>  
                {/* link to be added to cart */}
                <Link to='cart'>
                    <HiOutlineShoppingBag className='text-success me-4' size={30}/>  {/*will not be displayed user not logged in*/}
                </Link>
                
                {/* Next part will have a link to user profile */}
                <div className=''> 
                    <img src={profile} alt='' width='55' height='55' className='rounded-circle me-2' />                        
                    <span className='pt-3 fs-5 text-success'>Usman</span>
                </div>

                {/* This login button will be displayed instead of profile if not logged in */}
                {/* <div className='btn btn-success me-4 px-4'> LOGIN </div> */}
            </div>
        </nav>
    </div>
  )
}

export default Header