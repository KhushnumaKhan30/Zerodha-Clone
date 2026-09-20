import React from 'react'

function Hero() {
    return (

    <section className="container-fluid mt-5 " id="supportHero">
         <div className="mt-5 p-4 " id="supportWrapper">
          <h4>Support Portal</h4> 
          <a href='' >Track Ticket</a> 
        </div>
        <div className="row mt-5 p-4 mb-5" id ="supportHelp">
         <div className="col-6  p-4 ">
          <h3 className='fs-3'>Search for an answer or browse help topics to create a ticket</h3>
          <input type='text' placeholder='Eg: How do i open my account, How do i activate F&Q...' className='p-4'></input><br></br>
          <a href='' >Track account opening </a> &nbsp;&nbsp;
          <a href='' >Track segment activation</a> &nbsp;&nbsp;
          <a href='' >Intraday margin</a>&nbsp;&nbsp;
          <a href='' >kite user manuals</a>
         </div>

         <div className="col-6 p-4">
            <h3>Featured</h3>
            <ol>
              <li>
                   <a href=''>Current Takeovers and Delistings- January 2024 </a> 
  
              </li>
              <li>
                  <a href=''>Latest Intraday leverages- MIS & CO </a> 
               </li>
            </ol>
         </div>
        </div>

    </section>
    );
}

export default Hero;