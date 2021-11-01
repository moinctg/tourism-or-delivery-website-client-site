import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
const ManageSevice = () => {
    const [services, setServices] = useState([]);
    const {serviceId} = useParams();
 
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="py-8">
           <h3 className="text-center text-primary">Manage orders</h3>
    <h4>Totoal Order:{services.length}</h4>
   <h3>{serviceId}</h3> 
           
        </div>
    );
};

export default ManageSevice;