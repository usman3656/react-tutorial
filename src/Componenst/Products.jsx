import React from 'react';
import products from '../utils/products';
import { Link } from 'react-router-dom';

function Products() {  
  return (
    <div className='my-4'>
        <span className='fw-bold m-2'>ALL CATEGORIES</span>
        <br/>
        {products.map((product)=>(
        <Link to={`/product/${product._id}`} key={product._id}>
            <button className='btn mt-2' >
                <div className="card shadow">
                    <img src={product.productImage[0]} className="card-img-top img-fluid" alt="..." />            
                    <h5 className="card-title ">{product.productName}</h5>
                    <div className="card-body d-flex justify-content-between">
                        <p className='text-primary'>Rs. <span className='fw-bold'>{product.productPrice}</span></p>
                        {/* <button className='btn btn-success'>Add to cart</button>*/} 
                    </div>
                </div>
            </button>
        </Link>
      ))}
              
    </div>
  )
}

export default Products