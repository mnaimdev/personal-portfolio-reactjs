import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
<div className="header-area">
                <div className="main-header  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo.png"></img>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="col-xl-10 col-lg-10 col-md-10">
                                <div className="menu-main d-flex align-items-center justify-content-end">
                                    
                                    <div className="main-menu f-right d-none d-lg-block">
                                        <nav> 
                                            <ul id="navigation">
                                                <li>
                                                    <NavLink to="/">Home</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/about">About</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/service" >Services</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/portfolio">Portfolio</NavLink>
                                                </li>
                                                <li><Link to="">Page</Link>
                                                    <ul className="submenu">
                                                        <li>
                                                            <NavLink to="/blog">Blog</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/blog-details">Blog Details</NavLink>
                                                        </li>
                                                        
                                                        <li>
                                                            <NavLink to="portfolio-details">Portfolio Details</NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <NavLink to="/contact">Contact</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-right-btn f-right d-none d-xl-block ml-20">
                                        <a href="#" className="btn header-btn">Get Free Consultent</a>
                                    </div>
                                </div>
                            </div>   
                           
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Header;