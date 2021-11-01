import React from 'react';
import img from '../../../images/home-about.jpg';

const About = () => {
    return (
        <div className="container my-8">
            <div className="row">
                <div className="col-lg-5">
                     <img src={img} alt=""  style = {{width: '92%'}}/>
                </div>
                <div className="col-lg-5">
                     
                    <h1 className="text-center"> Our Story</h1>
                    <p className="p-3"> Shop to Door  is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.

                        We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs</p>
                    <p className=" mb-5">We deliver your products safely to <br />your home in a reasonable time. </p><a className="btn btn-primary me-2" href="#!" role="button">Get started<i className="fas fa-arrow-right ms-2"></i></a>


                </div>
            </div>



           
        </div>
    );
};

export default About;