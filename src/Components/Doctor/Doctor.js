import React from 'react';

const Doctor = (props) => {
    const {img,name,experts,day} = props.doctor;
    return (
        <div>
             <div className="col">
                <div className="card">
                    <img src={img}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title fw-bold text-danger">{name}</h3>
                        <h5 className="card-text fe-bold">{experts}</h5>
                        <p className="card-text">Available on : {day}</p>                </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;