import React from 'react'
function Education() {
    return (
        <div className="container mb-5">
             <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <img src="media/images/education.svg" alt="Education" className="img-fluid mt-4"/>
                </div>

                 <div className="col-lg-6 col-sm-12 mt-5">
                     <h3 className='text-muted mt-5 mb-3'>Free and open market education</h3>
                     <p  className='text-muted mb-2' >Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                      <a href="#" style={{textDecoration: 'None'}}>Varsity<i class="fa-solid fa-arrow-right-long"></i></a>

                      <p className='text-muted mt-3 mb-2'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                       <a href="#"  style={{textDecoration: 'None'}}>TradingQ&A<i class="fa-solid fa-arrow-right-long"></i></a>

                      
                 </div>
             </div>
         </div>   
                     
                         
               
    );
}

export default Education;