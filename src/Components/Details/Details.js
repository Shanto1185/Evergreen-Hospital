import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/details.json')
            .then(res => res.json())
        .then(data=>setDetails(data.services))
    },[])
    return (
        <div>
            <h1>i am from details{serviceId}</h1>
            <p>got:{details.length}</p>
        </div>
    );
};

export default Details;