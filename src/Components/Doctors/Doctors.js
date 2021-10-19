import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctores.json')
            .then(res => res.json())
            .then(data =>setDoctors(data))
        
    },[])

    return (
        <div className="container">
            <h1 className="my-5 fw-bold"><span className="text-danger">Expert</span> Doctors</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;


 