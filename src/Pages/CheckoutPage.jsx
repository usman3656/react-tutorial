import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {BsCashCoin, BsCreditCardFill, BsRecordCircleFill} from 'react-icons/bs'
import {AiFillHome, AiOutlineCheck, AiOutlinePlus} from 'react-icons/ai';
import userData from '../utils/userData'
import { Link } from 'react-router-dom';

function CheckoutPage() {
  const [step,setStep]=useState(1);  
  const [address,setAddress]=useState(userData.address);
  const [upAdd,setUpAdd]=useState(false);
  const [newAddress, setNewAddress] = useState('');
  const { cartItems,cartTotal,clearItemFromCart } = useContext(CartContext);
  const [orderno,setOrderno]=useState(12345);

  const updateAdd =() => {
    setUpAdd(true);
  }
  const updateAddress =(address) => {
    setAddress(address);
    setUpAdd(false);
  };
  const handleStepClick = (newStep) => {
    setStep(step+1);
  };
  const handleUpdateAddress = () => {    
      updateAddress(newAddress);    
  };

  return (
    <div>          
      <div className='text-center fs-4'>
        Checkout ({step}/3)
      </div>
      <div className='text-center my-2'>
        <BsRecordCircleFill className={step===1?'text-warning':'text-secondary'} />-----------------
        <BsRecordCircleFill className={step===2?'text-warning':'text-secondary'} />-----------------
        <BsRecordCircleFill className={step===3?'text-warning':'text-secondary'} />
      </div>
      <div className='col-6 offset-3 mt-5 p-3'>
        {step===1?
          <div>
            <div className='fs-5 px-2 d-flex justify-content-between'> 
              Select delivery address:
              <button type='button' className='btn btn-outline-warning' onClick={updateAdd}><AiOutlinePlus/> Update address</button>           
            </div>
            <div className='my-3 border border-warning rounded p-3'>
              <div>
                <AiFillHome className='text-warning' size={25}/>
                <span className='ms-2 fw-bold text-secondary'>{userData.firstName} {userData.lastName}</span>
                <div className='ms-4 ps-3 text-secondary'>
                  {userData.phone}
                </div>
                <div className='ms-4 ps-3'>
                  {address}
                </div>
              </div>
              

            </div>
            <div>  
              {upAdd &&             
                <div className='d-flex gap-2'>
                  <input className='form-control' placeholder='Address' value={newAddress} onChange={(e) => setNewAddress(e.target.value)}></input>
                  <button className='btn btn-warning' onClick={handleUpdateAddress}>Update</button>
                </div>
              }
            </div>
            <div className='text-end my-3'>
              <button className='btn btn-warning' onClick={handleStepClick}> Proceed to pay</button>
            </div>
          </div> 
          :
          step===2?
          <div> 
            <div className='fs-5 offset-2 mb-3 fw-semibold'>
              Select payment method: 
            </div>
            <div className="form-check form-check-inline border rounded border-warning col-6 offset-2 my-2">
              <div className='m-2'>
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" for="inlineRadio1">
                  <div className='d-flex gap-2'>
                  <BsCreditCardFill className='text-warning' size={25}/>
                  Online Payment
                  </div>
                </label>
              </div>
            </div>
            <div className="form-check form-check-inline border rounded border-warning col-6 offset-2 my-2">
              <div className='m-2'>
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label className="form-check-label" for="inlineRadio2">
                  <div className='d-flex gap-2'>
                    <BsCashCoin className='text-warning' size={25}/>
                    Cash on Delivery
                    </div>
                </label>
              </div>
            </div>
            <div className='my-3 d-flex justify-content-between col-6 offset-2'>
              <div>Order total:  <span className='fw-bold'> Rs. {cartTotal}</span></div>
              <button className='btn btn-warning' onClick={handleStepClick}> Place Order</button>
            </div>
          </div>
          :
          <div className='text-center'> 
              <div className='fs-3 text-center mb-4'>
                <AiOutlineCheck className='text-success mx-3' size={30}/>
                Order placed successfully!
              </div>
              <div className='text-secondary col-7 offset-3 fs-5'>
                Congratulations! Your order has been placed. You can track your order number #{orderno}
              </div>
              <div className='d-flex gap-2 col-7 offset-3 justify-content-between my-4'>
                <Link to={'/'}>
                  <button type="button" class="btn btn-outline-warning">Contniue shopping</button>
                </Link>
                <button type="button" class="btn btn-warning">Track Order</button>
              </div>
          </div>
        }
      </div>

    </div>
  )
}

export default CheckoutPage