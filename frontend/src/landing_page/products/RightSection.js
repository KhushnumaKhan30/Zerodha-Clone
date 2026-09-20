import React from 'react'

function RightSection({imgURL, productName, productDescription , tryDemo}) {
    return (
             <div className="container mt-4">
            <div className="row align-items-center">

                <div className="col-lg-6 col-sm-12 p-5">
                    <h3 className='text-muted mb-1 '>{productName}</h3>
                    <p className='text-muted mb-3 p-2 '>{productDescription}</p>
                    <a href={tryDemo} className="btn btn-primary mx-2">Try Demo</a>
               </div>

            <div className="col-lg-6 col-sm-12  p-5 ">
                    <img src={imgURL} alt={productName} className="img-fluid " />
                </div>
       </div>
       </div>
    );
}

export default RightSection;