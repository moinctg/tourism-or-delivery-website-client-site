import React from 'react';

const Contact = () => {
    return (
        <div>
         
      <section>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4"><img src="assets/img/illustrations/callback.png" alt="..." />
              <h5 className="text-danger">REQUEST A CALLBACK</h5>
              <h2>We will contact in the shortest time.</h2>
              <p className="text-muted">Monday to Friday, 9am-5pm.</p>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <form className="row">
                <div className="mb-3">
                  <label className="form-label visually-hidden" for="inputName">Name</label>
                  <input className="form-control form-quriar-control" id="inputName" type="text" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <label className="form-label visually-hidden" for="inputEmail">Another label</label>
                  <input className="form-control form-quriar-control" id="inputEmail" type="email" placeholder="Email" />
                </div>
                <div className="mb-5">
                  <label className="form-label visually-hidden" for="validationTextarea">Message</label>
                  <textarea className="form-control form-quriar-control is-invalid border-400" id="validationTextarea" placeholder="Message" style={{height: '150px' }} required="required"></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">Send Message<i className="fas fa-paper-plane ms-2"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      

      </section>
      




      <section id="findUs">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-5 mb-6 text-center">
              <h5 className="text-danger">FIND US</h5>
              <h2>Access us easily</h2>
            </div>
            <div className="col-12">
              <div className="card card-span rounded-2 mb-3">
                <div className="row">
                  <div className="col-md-6 col-lg-7 d-flex"><img className="w-100 fit-cover rounded-md-start rounded-top rounded-md-top-0" src="assets/img/gallery/map.svg" alt="map" /></div>
                  <div className="col-md-6 col-lg-5 d-flex flex-center">
                    <div className="card-body">
                      <h5>Contact with us</h5>
                      <p className="text-700 my-4"> <i className="fas fa-map-marker-alt text-warning me-3"></i><span>95,Agrabad, Chittagong</span></p>
                      <p><i className="fas fa-phone-alt text-warning me-3"></i><span className="text-700">Sat - Friday: 10 am - 10pm<br/><span className="ps-4">Sunday: 11 am - 9pm  </span></span></p>
                      <p><i className="fas fa-envelope text-warning me-3"> </i><a className="text-700" href="mailto:shoptodoor"> info@shoptodoor</a></p>
                      <ul className="list-unstyled list-inline mt-5">
                        <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-facebook-square fs-2"></i></a></li>
                        <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-instagram-square fs-2"></i></a></li>
                        <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-twitter-square fs-2"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary px-5" type="submit"><i className="fas fa-phone-alt me-2"></i><a className="text-light" href="tel:123-456789">Call us to delivery 880-1824-682965</a></button>
              </div>
            </div>
          </div>
        </div>
        
      </section>

        </div>
    );
};

export default Contact;