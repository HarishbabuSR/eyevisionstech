import React from "react";
import { NavLink as Link } from 'react-router-dom';
import "../navbar/Navbar.css"

let Navbar = ()=>{
    return (
        <React.Fragment>
            {/* <nav className="navbar sticky-top navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">
                    <img className='navanimation' src={logo1} alt="" width="70" height="70"/></a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav newbar">
                        <li className="nav-link new-link">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-link">
                            <a href="/"  className="nav-link">Services</a>
                        </li>
                        <li className="nav-link">
                            <a href="/" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-link">
                            <a href="/" className="nav-link">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar sticky-top navbar-expand-lg navbar-mainbg">
                <a href="/" className="navbar-brand navbar-logo" >
                    <h1>3rd Eye Visions Technology</h1>
                   {/* <img src={logo2} width="50" height="50"/> */}
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContentr"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fa fa-bars text-black"></i>  
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/" exact>
                                <i className="fa fa-tachometer"></i>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/services" exact>
                                <i className="fa fa-clone"></i>
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about" exact>
                                <i className="fa fa-address-book"></i>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus" exact>
                                <i className="fa fa-copy"></i>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;


