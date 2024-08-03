import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutStart from './AboutStart';
import ContactSection from './ContactSection';
import Feedback from './Feedback';

const About = () => {
  return (
    <>
<div className="slider-area ">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap">
                                <h2>About me</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to="/about">About me</NavLink></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End --> */}
        {/* <!-- About Me Start --> */}
        <div className="about-me pb-top">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-me-img mb-30">
                            <img src="assets/img/gallery/aboutme.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="about-me-caption">
                            <h2>I Create Products Not Just Art.</h2> 
                            <p className="pb-30">Unlimited rewards. enjoy attractive discounts flexible Payme options global usage. Unlimited rewards. enjoy attracti exible ayment options global usage.</p>
                            <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</h5>
                            <p>Unlimited rewards. enjoy attractive discounts flexible Payme options global usage. Unlimited rewards. enjoy attracti exible ayment options global usage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AboutStart />

        <Feedback />

        <ContactSection />
    </>
  )
}

export default About;