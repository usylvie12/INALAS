import React from 'react'



function Request() {
    
    
  return (
    <div>
        <div className="container my-5 py-5">
                    <div className="row">
                        
                        
                            
                           
                            <div className="col-md-8">
                            <h2 className="display-6 mb-2">Send Us A Message</h2>
                            <hr className='w-50' />
                                <form action="">
                                    <div className="mb-3">
                                        <label for="Name" className="form-label">Your Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" ></textarea>
                                    </div>
                                    <button  className='btn btn-outline-primary mt-5'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                
    </div>
  )
}

export default Request