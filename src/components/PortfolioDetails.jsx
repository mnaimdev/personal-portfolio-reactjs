import { NavLink } from "react-router-dom";
import ContactSection from "./ContactSection";

const PortfolioDetails = () => {
  return (
    <>
<main>

{/* <!-- Header Start --> */}
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
                            <li className="breadcrumb-item"><NavLink to="/portfolio-details">My Portfolio</NavLink></li> 
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Header End --> */}
{/* <!-- Services Details Start --> */}
<div className="portfolio-details-area section-padding2">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="portfolio-img">
                    <div className="details-img mb-40">
                        <img src="assets/img/gallery/portfolio.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8">
                <div className="details-caption pl-50">
                    <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim laborum.Dvcuis aute iruxvfg.</p>

                    <p className="mb-50">Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim laborum.Dvcuis aute iruxvfg.</p>

                    <h3>How can we help?</h3>
                    <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.Mollit anim laborum.Dvcuis aute iruxvfg.</p>
                    
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Services Details End --> */}
{/* <!-- Contact Info Start --> */}
<ContactSection />
{/* <!-- Contact Info End --> */}

</main>
    </>
  )
}

export default PortfolioDetails;