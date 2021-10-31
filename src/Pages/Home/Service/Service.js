import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div>
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            {/* <h5>Price: {price}</h5> */}
            <p className="px-3">{description}</p>
            
        </div>
        <div>
            <Link to={`/booking/${_id}`}>
        <button className="btn btn-primary text-center ">Book {name.toLowerCase()}</button>
    </Link>
    </div>
    </div>
    );
};

export default Service;