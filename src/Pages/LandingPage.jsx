import React from 'react';
import electronics from '../electronics.jpg'
import clothing from '../clothing.jpg'
import accessories from '../accessories.jpg'
import motors from '../motors.jpg'
import Products from '../Componenst/Products';

function LandingPage() {
  const categories=[
    {
      name:"Electronics",
      image:electronics
    },
    {
      name:"Clothing",
      image:clothing
    },
    {
      name:"Accessories",
      image:accessories
    },
    {
      name:"Motors",
      image:motors
    }
  ];

  return (
    <div>
      {categories.map((category,index)=>(
        <button className='btn' key={index}>
          <div className="card shadow categories">
            <img src={category.image} className="card-img-top" alt="..."/>            
            <h4 className='fw-bold'>{category.name}</h4>
          </div>
      </button>
      ))}
      <Products/>
    </div>
  )
}

export default LandingPage