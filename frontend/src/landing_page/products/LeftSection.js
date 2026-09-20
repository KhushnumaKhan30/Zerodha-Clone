import React from 'react' 

function LeftSection({imgURL, productName, productDescription , tryDemo , learnMore, googlePlay , appStore}) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-lg-6 col-sm-12 p-5 ">
                    <img src={imgURL} alt={productName} className="img-fluid " />
                </div>

                <div className="col-lg-6 col-sm-12 mt-5 p-5">
                    <h3 className='text-muted mb-1 '>{productName}</h3>
                    <p className='text-muted  mb-3 p-2'>{productDescription}</p>
                    <a href={tryDemo} className="btn btn-primary mx-2">Try Demo</a>
                    <a href={learnMore} className="btn btn-outline-primary mx-2">Learn More</a>
                    <div className="mt-3 p-3">
                        <a href={googlePlay} className="mx-2">
                            <img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{ height: "40px" }} />
                        </a>
                        <a href={appStore} className="mx-2">
                  
                     <img src="media/images/appstoreBadge.svg" alt="App Store" style={{ height: "40px" }} /> </a>
             </div>
           </div>
       </div>
       </div>
    );
}

export default LeftSection;