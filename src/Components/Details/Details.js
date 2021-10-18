import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('/details.json')
            .then(res => res.json())
            .then(data =>setServiceDetails(data.services))
    }, [])

    // useEffect(() => {
    //     const found = serviceDetails.find(d => d.id === id)
    //     console.log(found)
    // },[serviceDetails])


    return (
        <div>
            <h1>i am from details{id}</h1>
        </div>
    );
};

export default Details;