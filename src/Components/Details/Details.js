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
        const found = serviceDetails.find(detail => detail.id == id)
        setSinglePerson(found);
    }, [serviceDetails, id])


    return (
        <div> 
            <div className="">
            <h1 className="my-5 fw-bold"><span className="text-primary">Service</span> Details</h1>
                <div className="col signle-details">
                    <div className="signle-details card">
                        <img src={singlePerson?.img} className="details-img card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title fw-bold text-primary">{singlePerson?.name}</h2>
                            <p className="card-text fw-bold">Details:{singlePerson?.description}</p>
                            <p className="card-text fw-bold">Cost: {singlePerson?.cost}</p>
                            <p className="card-text fw-bold">It will take: {singlePerson?.time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;