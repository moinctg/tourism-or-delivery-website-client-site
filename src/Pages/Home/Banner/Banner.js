
import React from 'react';
import Background from '../../../images/gallery/hero-header-bg.png';
const Banner = () => {
    const  style={
        backgroundImage: "url(" + { Background } + ")",
        backgroundPosition: 'top center',
        backgroundSize:'cover'
        }
    
    return (
        <div>
            <section className="py-xxl-10 pb-0" id="home">
        <div className="bg-holder bg-size" style={style}>
        </div>
        
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end"><img className="pt-7 pt-md-0 w-100" src="assets/img/illustrations/hero.png" alt="hero-header" /></div>
            <div className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-8">
              <h1 className="fw-normal fs-6 fs-xxl-7">A trusted provider of </h1>
              <h1 className="fw-bolder fs-6 fs-xxl-7 mb-2">courier services.</h1>
              <p className="fs-1 mb-5">We deliver your products safely to <br />your home in a reasonable time. </p><a className="btn btn-primary me-2" href="#!" role="button">Get started<i className="fas fa-arrow-right ms-2"></i></a>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Banner;