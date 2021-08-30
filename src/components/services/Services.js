import React from 'react';
import "../services/Services.css"
import service from "../../assets/images/webdesignew.png"
import dogi from "../../assets/images/dogital.png"
import mobile from "../../assets/images/mobile.png"
import application from "../../assets/images/webapplication.png"

const Services = () => {
    return(
        <React.Fragment>
        <div className="servicetab">
            <div className="service-list">
              <ul className="serviceUl">
                 <a href='#'> <li className="serviceList">Web design</li></a>
                 <a href='#'> <li className="serviceList">Mobile application</li></a>
                 <a href='#'> <li className="serviceList">Web application</li></a>
                 <a href='#'> <li className="serviceList">Digital marketing</li></a>
              </ul>
          </div>
          <div className='section p-4'>
             <div className='row'>
              <div className='col webdetails'>
                   <h1>Web design</h1>
                   <p className='h3' style={{opacity:'0.6',fontSize:'20px',fontFamily:'sans-serif'}}>The Banyan Infotech is the best web design company in Coimbatore. We offer services like web design, web development and WordPress development. We follow the best coding standards and all our websites will be fully responsive. Our Services include:</p>      
                   <div className='responseweb'>
                       <div>Responsive Web Design</div>
                   <div>Static Web Design</div>
                   <div>Word press development</div>
                   <div className='quotebtn'>Get Quote</div>
                   </div>
              </div>
              <div className='col'>
                  <img src={service} alt=''/>  
              </div>
             </div>
          </div>
          <div className='section p-4'>
             <div className='row'>
             <div className='col'>
                  <img src={mobile} alt=''/>  
              </div>
              <div className='col webdetails'>
                   <h1>Mobile Application</h1>
                   <p className='h3' style={{opacity:'0.6',fontSize:'20px',fontFamily:'sans-serif'}}>The Banyan Infotech is the best web development company in Coimbatore. We develop web applications like ERP, CRM, HRM and E-Commerce applications according to our client's requirements. Our Web Development services include:</p>      
                   <div className='responseweb'>
                       <div>ERP Development.</div>
                   <div>ERP Development.</div>
                   <div>ERP Development.</div>
                   <div className='quotebtn'>Get Quote</div>
                   </div>
              </div>
              
             </div>
          </div>
          <div className='section p-4'>
             <div className='row'>
              <div className='col webdetails'>
                   <h1>Web Application</h1>
                   <p className='h3' style={{opacity:'0.6',fontSize:'20px',fontFamily:'sans-serif'}}>The Banyan Infotech is the best web design company in Coimbatore. We offer services like web design, web development and WordPress development. We follow the best coding standards and all our websites will be fully responsive. Our Services include:</p>      
                   <div className='responseweb'>
                       <div>Responsive Web Design</div>
                   <div>Static Web Design</div>
                   <div>Word press development</div>
                   <div className='quotebtn'>Get Quote</div>
                   </div>
              </div>
              <div className='col'>
                  <img src={application} alt=''/>  
              </div>
             </div>
          </div>
          <div className='section p-4'>
             <div className='row'>
             <div className='col'>
                  <img src={dogi} alt=''/>  
              </div>
              <div className='col webdetails'>
                   <h1>Digital Marketing</h1>
                   <p className='h3' style={{opacity:'0.6',fontSize:'20px',fontFamily:'sans-serif'}}>The Banyan Infotech is the best web design company in Coimbatore. We offer services like web design, web development and WordPress development. We follow the best coding standards and all our websites will be fully responsive. Our Services include:</p>      
                   <div className='responseweb'>
                       <div>Responsive Web Design</div>
                   <div>Static Web Design</div>
                   <div>Word press development</div>
                   <div className='quotebtn'>Get Quote</div>
                   </div>
              </div>
              
             </div>
          </div>
        </div>
        </React.Fragment>
    )
}



export default Services;