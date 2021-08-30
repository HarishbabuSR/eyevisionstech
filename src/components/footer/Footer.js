import React from 'react';
import "./Footer.css"
import whatsapp from '../../assets/images/WhatsApp.png';
import insta from '../../assets/images/insta.jpg';
import fb from '../../assets/images/facebook.png';
const Footer = () => {
    return(
        <React.Fragment>
        <div className='section'>
          <div className='row footermainall'>
             <div className='col-md-3 footercontentone'>
             <h1 className="footheader">WebsiteDesign Services</h1>
                <ul>
                 <li className="footerlist">Static Website Design</li>
                 <li className="footerlist">HTML Website Design </li>
                 <li className="footerlist">Responsive Website Design</li>
                 <li className="footerlist">Professional Website Design</li>
                 <li className="footerlist">Small Business Web Design</li>
                 <li className="footerlist">WordPress Developmentn</li>
                </ul>
             </div>
             <div className='col-md-3 footercontenttwo'>
             
             <h1 className="footheader">Development Services</h1>
                <ul>
                <li className="footerlist">Local SEO Service</li>
                 <li className="footerlist">Search Engine Optimization</li>
                 <li className="footerlist">E-commerce SEO Service</li>
                 <li className="footerlist">Social Media Marketing</li>
                 <li className="footerlist">Google Adwords / PPC</li>
                 <li className="footerlist">Facebook Marketing</li>
                </ul>
             </div>
             <div className='col-md-3 footercontentthree'>
            
             <h1 className="footheader">Marketing Services</h1>
                 <ul  className="footerlist">
                 <li className="footerlist">ERP Software Development</li>
                 <li className="footerlist">CRM Software Development</li>
                 <li className="footerlist">Magento Web Development</li>
                 <li className="footerlist">Custom Web Development</li>
                 <li className="footerlist">Android App Development</li>
                 <li className="footerlist">iOS App Development</li>
                 </ul>
             </div>
             <div className='col-md-3 footercontentfour'>
            
             <h1 className="footheader">Other Web Services</h1>
               <ul>
                 <li className="footerlist">Domain Name Services</li>
                 <li className="footerlist">Website Re-designing</li>
                 <li className="footerlist">Html design</li>
                 <li className="footerlist">Web Link Building</li>
               </ul>
               
             </div>
          </div>
          <div className="footer-info">
              <span>3rd Eye Vision Technology. All rights reserved.</span>
            <div className='footimg'>
              <a  className="" href={`https://web.whatsapp.com/send?phone=${+919538301143}`} target="_">Reach US<img src={whatsapp}  alt='#' width='50' height='50'/></a>
           </div>
        </div> 

        </div>
        
    </React.Fragment>

    )
}

export default Footer;