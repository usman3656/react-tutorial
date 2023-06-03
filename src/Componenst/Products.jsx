import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products({categ}) {  
  const [products, setProducts] = useState([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        console.log('this'+categ);
        if(categ==null)
          {
            response = await axios.get(`/user/get-products`);
          }
        else 
          {
            console.log('categ api');
            response = await axios.get(`/user/get-productbycateg/${categ}`);
          }
        setProducts(response.data.product);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };
    fetchData();
  }, [categ]);

  return (
    <div className='my-4'>
        <span className='fw-bold m-2'>{categ?categ.toUpperCase():'ALL CATEGORIES'}</span>
        <br/>
        {console.log(products)}

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