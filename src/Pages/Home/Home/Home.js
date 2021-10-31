
import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Background from '../../../images/gallery/quote.png';
const Home = () => {
    const style= {
        backgroundImage: "url(" + { Background } + ")",
        backgroundPosition: 'top ',
        backgroundSize:'cover',
        backgroundSize:'auto',
        marginLeft:'270px',
        marginTop:'-45px'
    }
    return (
        <div id="home">

          <Banner></Banner>
          <Services></Services>
          <Contact></Contact>

     
      <section class="pt-7 pb-0">

        <div class="container">
          <div class="row">
            <div class="col-6 col-lg mb-5">
              <div class="text-center"><img src="assets/img/icons/awards.png" alt="..." />
                <h1 class="text-primary mt-4">26+</h1>
                <h5 class="text-800">Awards won</h5>
              </div>
            </div>
            <div class="col-6 col-lg mb-5">
              <div class="text-center"><img src="assets/img/icons/states.png" alt="..." />
                <h1 class="text-primary mt-4">65+</h1>
                <h5 class="text-800">States covered</h5>
              </div>
            </div>
            <div class="col-6 col-lg mb-5">
              <div class="text-center"><img src="assets/img/icons/clients.png" alt="..." />
                <h1 class="text-primary mt-4">689K+</h1>
                <h5 class="text-800">Happy clients</h5>
              </div>
            </div>
            <div class="col-6 col-lg mb-5">
              <div class="text-center"><img src="assets/img/icons/goods.png" alt="..." />
                <h1 class="text-primary mt-4">130M+</h1>
                <h5 class="text-800">Goods delivered</h5>
              </div>
            </div>
            <div class="col-6 col-lg mb-5">
              <div class="text-center"><img src="assets/img/icons/business.png" alt="..." />
                <h1 class="text-primary mt-4">130M+</h1>
                <h5 class="text-800">Business hours</h5>
              </div>
            </div>
          </div>
        </div>
     

      </section>
     




    
      <section>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card bg-dark text-white py-4 py-sm-0"><img class="w-100" src="assets/img/gallery/video.png" alt="video" />
                <div class="card-img-overlay bg-dark-gradient d-flex flex-column flex-center"><img src="assets/img/icons/play.png" width="80" alt="play" />
                  <h5 class="text-primary">FASTEST DELIVERY</h5>
                  <p class="text-center">You can get your valuable item in the fastest period of<br class="d-none d-sm-block" />time with safety. Because your emergency<br class="d-none d-sm-block" />is our first priority.</p><a class="stretched-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                      <div class="modal-content overflow-hidden">
                        <div class="modal-header p-0">
                          <div class="ratio ratio-16x9" id="exampleModalLabel">
                            <iframe src="https://www.youtube.com/embed/TlcP2aTOp-Q" title="YouTube video" allowfullscreen="allowfullscreen"></iframe>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       

      </section>
     




      
     
      <section class="py-7">

        <div class="container-fluid">
          <div class="row flex-center">
            <div class="bg-holder bg-size" style={style}>
            </div>
           
            <div class="col-md-8 col-lg-5 text-center">
              <h5 class="text-danger">TESTIMONIAL</h5>
              <h2>Our Awesome Clients</h2>
            </div>
          </div>
          <div class="carousel slide pt-6" id="carouselExampleDark" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <div class="row h-100">
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 card-span p-3">
                      <div class="card-body">
                        <h5 class="mb-0 text-primary">Fantastic service!</h5>
                        <p class="card-text pt-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. </p>
                        <div class="d-xl-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center mb-3"><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i></div>
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/icons/avatar.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                              <p class="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 card-span p-3">
                      <div class="card-body">
                        <h5 class="mb-0 text-primary">Fantastic service!</h5>
                        <p class="card-text pt-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it.</p>
                        <div class="d-xl-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center mb-3"><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i></div>
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/icons/avatar.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Kim Young Jou</h6>
                              <p class="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 card-span p-3">
                      <div class="card-body">
                        <h5 class="mb-0 text-primary">Fantastic service!</h5>
                        <p class="card-text pt-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. .</p>
                        <div class="d-xl-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center mb-3"><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i></div>
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/icons/avatar.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                              <p class="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div class="row h-100">
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 card-span p-3">
                      <div class="card-body">
                        <h5 class="mb-0 text-primary">Fantastic service!</h5>
                        <p class="card-text pt-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. </p>
                        <div class="d-xl-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center mb-3"><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i></div>
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/icons/avatar.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                              <p class="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 card-span p-3">
                      <div class="card-body">
                        <h5 class="mb-0 text-primary">Fantastic service!</h5>
                        <p class="card-text pt-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. </p>
                        <div class="d-xl-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center mb-3"><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i></div>
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/icons/avatar.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Kim Young Jou</h6>
                              <p class="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 card-span p-3">
                      <div class="card-body">
                        <h5 class="mb-0 text-primary">Fantastic service!</h5>
                        <p class="card-text pt-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. .</p>
                        <div class="d-xl-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center mb-3"><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i></div>
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/icons/avatar.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                              <p class="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row h-100">
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 card-span p-3">
                      <div class="card-body">
                        <h5 class="mb-0 text-primary">Fantastic service!</h5>
                        <p class="card-text pt-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. </p>
                        <div class="d-xl-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center mb-3"><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i></div>
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/icons/avatar.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                              <p class="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 card-span p-3">
                      <div class="card-body">
                        <h5 class="mb-0 text-primary">Fantastic service!</h5>
                        <p class="card-text pt-3">“I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. </p>
                        <div class="d-xl-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center mb-3"><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i></div>
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/icons/avatar.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Kim Young Jou</h6>
                              <p class="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100 card-span p-3">
                      <div class="card-body">
                        <h5 class="mb-0 text-primary">Fantastic service!</h5>
                        <p class="card-text pt-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. .</p>
                        <div class="d-xl-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center mb-3"><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i><i class="fas fa-star text-primary me-1"></i></div>
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/icons/avatar.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Yves Tanguy</h6>
                              <p class="fs--2 fw-normal mb-0">Chief Executive, DLF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row px-3 px-md-0 mt-6">
              <div class="col-12 position-relative">
                <ol class="carousel-indicators">
                  <li class="active" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"></li>
                  <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        </section>
        </div>
        
    );
};

export default Home;