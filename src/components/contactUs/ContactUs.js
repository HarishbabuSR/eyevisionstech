import React from "react";
import "./ContactUs.css";
import phone from "../../assets/images/phone-one.png";
import map from "../../assets/images/map-one.png";
import mail from "../../assets/images/mail-one.png";
const ContactUs = () => {
  return (
    <React.Fragment>
      <div className=' container' style={{backgroundColor:"lightcyan", marginTop:"10px"}}>
            <div className='row conatactmain'>
                 <h3 className='contactHead'>Contact Us</h3>
            </div>
            <div className='row contactdetails'>
              <div className='col contactallone'>
                <div className='contactimgone'>
                <img src={phone} alt='#' width='100' height='100' />
                </div>
                 <div className='conatctone'>
                     Phone Number
                  <p className='conatctpara'>mobile : <span className='numbercontact'>+91-9538301143</span></p>
                 </div>
              </div>
              <div className='col contactalltwo'>
             <div className='contactimgtwo'>
             <img src={mail} alt='#' width='100' height='100'/>
             </div>
                 <div className='contacttwo'>
                     Email Address
                  <p className='conatctpara'>info@3eyevisions.com</p>
                 </div>
              </div>
              <div className='col contactallthree'>
             <div className='contactimgthree'>
             <a className="" href="https://www.google.com/maps/place/3rd+Eye+Visions+Technology/@12.825614,77.6832802,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae6da4e8aa52d3:0x511a090b23285054!8m2!3d12.825614!4d77.6854689" target="_"><img src={map} alt='#' width='100' height='100'/></a>
             </div>
                 <div className='conatctthree'>
                     Our Location
                  <p className='conatctpara'>B9/45 Banglore Vidyanagr <br/>Karnataka India-570018</p>
                 </div>
              </div>
             </div>
        </div> 

      {/* <div className="container">
        <div className="row">
          
            <p>ContactUs</p>
            </div>
          <div className="row">
            <div className="col-4 col-lg-4 col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="contactimgone">
                    <img src={phone} alt="#" width="100" height="100" />
                  </div>
                  <div className="conatctone">
                    Phone Number
                    <p className="conatctpara">
                      mobile :{" "}
                      <span className="numbercontact">+91-9788755464</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 col-lg-4 col-md-4">
              <div className="card">
                <div className="card-body"></div>
              </div>
            </div>

            <div className="col-4 col-lg-4 col-md-4">
              <div className="card">
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        
      </div> */}
    </React.Fragment>
  );
};

export default ContactUs;
