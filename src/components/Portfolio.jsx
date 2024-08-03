import React from 'react';
import { NavLink } from 'react-router-dom';
import ServiceArea from './ServiceArea';

const Portfolio = () => {
  return (
    <>
      <div className="slider-area ">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap">
                                <h2>My Portfolio</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to="/portfolio">My Portfolio</NavLink></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <ServiceArea />
    </>
  )
}

export default Portfolio;