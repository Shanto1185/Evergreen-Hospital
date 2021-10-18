import React from 'react';

const Footer = () => {
    return (
        <div className="mt-5">
            <footer className="bg-dark text-white">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Recipe Press</h1>
                        <p>Email: recipe12@gmil.com</p>
                        <p>Cell: 00-99-12-23</p>
                    </div>
                    <div className="col-md-6">
                        <h1>Follow Us On</h1>
                        <p>Facebook : <i class="fab fa-facebook-square"></i></p>
                        <p>Twitter :  <i class="fab fa-twitter-square"></i></p>
                        <p>Linkedin : <i class="fab fa-linkedin"></i></p>
                    </div>
                </div>
                <small>all rights reserves to @ recipe_learning_press</small>
            </footer>
        </div>
    );
};

export default Footer;