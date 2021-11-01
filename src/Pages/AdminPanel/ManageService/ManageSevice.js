import React from 'react';
import {useState,useEffect} from 'react';
const ManageSevice = () => {
    const [services, setServices] = useState([]);
    const [order,setOrder] = useState([]);
  
 
    useEffect(() => {
        fetch('https://fierce-reaches-68927.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleDeleteOrde = (id) =>{
        const url =`https://fierce-reaches-68927.herokuapp.com/services/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                alert('user Successfuly Deleted.');
                const remainUser = order.filter(order =>order._id !==id);
                setOrder(remainUser);

            }
        })


    }
    return (
        <div className="py-8">
           <h3 className="text-center text-primary">Manage orders</h3>
    <h4>Totoal Order:{services.length}</h4>
    <div className="service-container">


      {
          services.map(service=><div key={service._id}>
              <p> {service.name} </p>
              <p> {service.email}</p>
              <button onClick={ ()=>handleDeleteOrde(order._id)}> X</button>
          </div>)
      }
      </div>
           
        </div>
    );
};

export default ManageSevice;