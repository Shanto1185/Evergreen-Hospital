
import React from 'react';
import './About.css'
import img1 from '../../images/doctor1.jpg'
import img2 from '../../images/heart.jpg'

const About = () => {
    return (
        <div className="container my-3 about-style">
                        <h1 className="my-5 fw-bold"><span className="text-success">About </span> Us</h1>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                        <img src={img1} className="img-fluid rounded-start" alt="..." />
                                        <h3>DR. ATM REZAUL KARIM</h3>
                                        <p>MBBS, D.Ortho, MS (Ortho)</p>
                                        <p>Managing Director</p>
                                        <hp>EverGreen Hospital & Clinic</hp>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title fw-bold">-MESSAGE FROM <br /> MANAGING DIRECTOR-</h1>
                                <p className="card-text">It is indeed a great pleasure for me to introduce our brand new state – of – the -art technology hospital in the region of Chittagong. Nowadays, if anyone needs good treatment, they need to look forward to Dhaka or Abroad. Because good and well facilitated hospitals are not available in the port city of Chittagong.
                                                            So, we needed to decentralize and step forward to establish well facilitate and modern hospital in Chittagong city. Moreover, we felt that our integrated Township of Chittagong city, the second capital and largest sea-port of Bangladesh, would be incomplete without a good health care facility like  1994.</p>
                            </div>
                            </div>
                        </div>
            </div>
            
            <h1 className="my-5 fw-bold text-danger">FACILITIES</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img2}className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Facilities From Us</h5>
                        <p className="card-text">We designed our hospital service that deliver effective relationship between medical and other health and social care team. An appropriate balance of specialist care and general care coordinated expertly and holistically around patient’s need.
                                At Parkview transfer of care arrangement that realistically allocate responsibility for further action when patients move from one care setting to another. Patients experience is valued as much as clinical effectiveness.</p>
                    </div>
                    </div>
                </div>
            </div>

        <div className="container px-4">
            <div className="row gx-0">
                <div className="col">
                <div className="p-3 border bg-warning fw-bold"><i className="fas fa-ambulance"></i> 24 Hours Ambulance Service</div>
                </div>
                <div className="col">
                <div className="p-3 border bg-primary fw-bold"><i className="fas fa-user-md"></i> Best doctor is in here for you</div>
                </div>
                <div className="col">
                <div className="p-3 border bg-danger fw-bold"><i className="fas fa-syringe"></i> You will get best and safe surgery </div>
                </div>
            </div>
            </div>
                            
        </div>
    );
};

export default About;