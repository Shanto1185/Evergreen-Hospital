import React from 'react';

const Doctor = (props) => {
    const {img,name,experts,day} = props.doctor;
    return (
        <div>
             <div className="col">
                <div className="card">
                    <img src={img}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                        <p className="card-text">{experts}</p>
                        <p>{day}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;