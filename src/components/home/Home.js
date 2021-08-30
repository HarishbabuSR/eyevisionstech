import React from 'react';
import "./Home.css"
import side from "../../assets/images/photo1.jpg"
import slide from "../../assets/images/macbook.jpeg"
import slidetwo from "../../assets/images/photo3.jpg"
import Services from '../services/Services';
import About from '../about/About';
import ContactUs from '../contactUs/ContactUs';
import Footer from '../footer/Footer';

const Home = () => {
    return(
        <React.Fragment>
           
          <div>
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={side} class="d-block w-100 slideImg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className='home-anima'>3rd Eye Visions Technology</h1>
        <p className='home-anima'>Software Development Company in Banglore </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide} class="d-block w-100 slideImg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 className='home-anima'>3rd Eye Visions Technology</h1>
        <p className='home-anima'>Software Development Company in Banglore </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slidetwo} class="d-block w-100 slideImg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className='home-anima'>3rd Eye Visions Technology</h1>
        <p className='home-anima'>Software Development Company in Banglore </p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
          {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={side} className="d-block w-100 slideImg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide} className="d-block w-100 slideImg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slidetwo} className="d-block w-100 slideImg" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}
          {/* <div id="carouselExampleSlidesOnly" className="carousel slide webimage" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={side} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slidetwo} className="d-block w-100 " alt="..."/>
    </div>
  </div>
</div> */}
              {/* <img className='webimage' src={side} alt='#'/>
             <div className='imgcontent'>
             <p>Web Design Company in Banglore</p>
             <span className='getquote'>Get Quote</span>
             </div> */}
             
          </div>
          <Services/>
          <About/>
          <ContactUs/>
          <Footer/>
          </React.Fragment>
    )
}

export default Home;