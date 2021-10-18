import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
        
    },[])

    return (
        <div className="container my-5">
            <div className="mb-5">
                <h1>Featured <span className="text-danger">Services</span></h1>
                <p><small>Most Demanded Services</small></p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 gx-4 gy-4">
                 {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                  }  
            </div>
        </div>
    );
};

export default Services;