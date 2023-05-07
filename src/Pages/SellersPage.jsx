import React from 'react';

function SellersPage() {
  return (
    <div className='bg-light border-top border-bottom border-4 border-success'>
        <h4 className='mx-4 mt-4'>Product Information</h4>
        <p className='text-secondary mx-4'>
            (all fields marked with 
            <span className='text-danger'> * </span> 
            are mandatory)
        </p>
        <form className='m-5'>
            <div className='d-flex mb-2'>
                <label className='sellerForm-label'>Category: <span className='text-danger'> * </span></label>
                <select className="form-select sellerForm-input" aria-label="Default select example" id='select1'>
                    <option selected>Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="CLothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Motors">Motors</option>
                </select>
            </div>
            <div className='d-flex mb-2'>
                <label className='sellerForm-label'>Product Name: <span className='text-danger'> * </span></label>
                <input className='form-control sellerForm-input' placeholder='Name' id='input1'></input>
            </div>
            <div className='d-flex mb-2'>
                <label className='sellerForm-label'>Product Price (in in PKR): <span className='text-danger'> * </span></label>
                <span class="input-group-text">Rs.</span>
                <input className='form-control sellerForm-inputwithText' placeholder='Price'></input>
            </div>
            <div className='d-flex mb-2'>
                <label className='sellerForm-label'>Product Description: </label>
                <textarea className='form-control sellerForm-input' type='text' rows="5"></textarea>
            </div>
            <div className='d-flex mb-2'>
                <label className='sellerForm-label'>Image: </label>
                <input className='form-control sellerForm-input' type='file' multiple></input>
            </div>
            <div className='d-flex mb-2'>
                <label className='sellerForm-label'></label>
            </div>
            <div className='d-flex justify-content-end col-5 ms-5 mt-4'>
                <button type='button' className='btn btn-success ms-auto px-5' data-bs-toggle="modal" data-bs-target="#exampleModal"> Submit </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">You have successfully added your product for selling!</h1>                        
                            <button type="button" className="btn btn-success mt-3" data-bs-dismiss="modal" onClick={() => window.history.back()}>Continue</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SellersPage