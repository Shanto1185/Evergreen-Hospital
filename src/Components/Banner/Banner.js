import React from 'react';
import './Banner.css'
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="banner-image">
                    <div className="title-container text-center">
                        <div className="title">

                            <div>
                                <Fade left>
                                    <h1 className="text-dark">Evergreen Hospital</h1>
                                    <h3 className="text-dark">Hospital & Clinic</h3>
                                </Fade>
                            </div>
                            <h6 className="text-dark">We provide you all kind of medical services,which is best in the city.Our diagnoses <br /> report are the best without any doubt.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;