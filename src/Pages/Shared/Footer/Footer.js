import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div>
            <section className="bg-1000">

<div className="container">
  <div className="row">
    <div className="col-lg-6">
      <h2 className="fw-bold text-white">Get an update every week</h2>
      <p className="text-300">We ensure that your product is delivered in the safest possible<br />manner, at the correct location, at the right time.</p>
    </div>
    <div className="col-lg-6">
      <h5 className="text-primary mb-3">SUBSCRIBE TO NEWSLETTER </h5>
      <form className="row gx-2 gy-2 align-items-center">
        <div className="col">
          <div className="input-group-icon">
            <label className="visually-hidden" for="inputEmailCta">Address</label>
            <input className="form-control input-box form-quriar-control text-light" id="inputEmailCta" type="email" placeholder="Enter your mail" />
          </div>
        </div>
        <div className="d-grid gap-3 col-sm-auto">
          <button className="btn btn-danger" type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
</div>


</section>
 
<section className="bg-900 pb-0 pt-5">

<div className="container">
  <div className="row">
    <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0"><a className="text-decoration-none" href=""><img src={logo} height="51" alt="" /></a>
      <p className="text-500 my-4">The most trusted Courier<br />company in your area.</p>
    </div>
    <div className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
      <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">Other links </h5>
      <ul className="list-unstyled mb-md-4 mb-lg-0">
        <li className="lh-lg"><a className="text-500" href="#!">Blogs</a></li>
        <li className="lh-lg"><a className="text-500" href="#!">Movers website</a></li>
        <li className="lh-lg"><a className="text-500" href="#!">Traffic Update</a></li>
      </ul>
    </div>
    <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
      <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">Services</h5>
      <ul className="list-unstyled mb-md-4 mb-lg-0">
        <li className="lh-lg"><a className="text-500" href="#!">Corporate goods</a></li>
        <li className="lh-lg"><a className="text-500" href="#!">Artworks</a></li>
        <li className="lh-lg"><a className="text-500" href="#!">Documents</a></li>
      </ul>
    </div>
    <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
      <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif"> Customer Care</h5>
      <ul className="list-unstyled mb-md-4 mb-lg-0">
        <li className="lh-lg"><a className="text-500" href="#!">About Us</a></li>
        <li className="lh-lg"><a className="text-500" href="#!">Contact US</a></li>
        <li className="lh-lg"><a className="text-500" href="#!">Get Update</a></li>
      </ul>
    </div>
  </div>
</div>


</section>

<section className="py-0 bg-1000">

<div className="container">
  <div className="row justify-content-md-between justify-content-evenly py-4">
    <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
      <p className="fs--1 my-2 fw-bold text-200">All rights Reserved &copy; Shop to Door@ 2021</p>
    </div>
    <div className="col-12 col-sm-8 col-md-6">
      <p className="fs--1 my-2 text-center text-md-end text-200"> Made with&nbsp;
        <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#F95C19" viewBox="0 0 16 16">
          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
        </svg>&nbsp;by&nbsp;<a className="fw-bold text-primary"  target="_blank"> by moinuddin</a>
      </p>
    </div>
  </div>
</div>


</section>





        </div>
    );
};

export default Footer;