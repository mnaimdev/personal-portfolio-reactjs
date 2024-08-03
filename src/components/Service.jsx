import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactSection from './ContactSection';
import Feedback from './Feedback';

const Service = () => {
  return (
    <>
<div className="slider-area ">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap">
                                <h2>My Services</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to="/service">My Services</NavLink></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
        {/* <!-- Categories Area Start --> */}
        <section className="categories-area categories-area2  section-padding30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-pen"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">UI/UX Design</a></h5>
                                <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-speaker"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">Digital Marketing</a></h5>
                                <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-portfolio"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">Website Design</a></h5>
                                <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-portfolio"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">Website Design</a></h5>
                                <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-speaker"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">Digital Marketing</a></h5>
                                <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-pen"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">UI/UX Design</a></h5>
                                <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        <Feedback />

        <ContactSection />
    </>
  )
}

export default Service;