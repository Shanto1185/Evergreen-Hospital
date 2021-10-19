import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';


const Details = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singlePerson, setSinglePerson] = useState([]);
    useEffect(() => {
        fetch('/details.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data.services))
    }, [])

    useEffect(() => {
        const found = serviceDetails.find(d => d.id == id)
        setSinglePerson(found);
    }, [serviceDetails, id])


    return (
        <div> 
            <div className="">
            <h1>Service Details</h1>
                <div className="col signle-details">
                    <div className="signle-details card">
                        <img src={singlePerson?.img} className="details-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{singlePerson?.name}</h5>
                            <p className="card-text"> {singlePerson?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;