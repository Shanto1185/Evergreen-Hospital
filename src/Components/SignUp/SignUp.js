import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { googleSignIn,handleEmail,handlePassword,handleCreateNewUser,handleName,error} = useAuth();
    return (
        <div className="containerm mt-5">
            <h1 className="text-primary text-center fw-bold my-5">Sign Up</h1>
            <form onSubmit={handleCreateNewUser}>
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name : </label>
                        <div className="col-sm-10">
                        <input onBlur={handleName}  type="name" className="form-control w-75" id="inputName"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email : </label>
                        <div className="col-sm-10">
                        <input onBlur={handleEmail}  type="email" className="form-control w-75" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                        <div className="col-sm-10">
                        <input onBlur={handlePassword}  type="password" className="form-control w-75" id="inputPassword3"/>
                        </div>
                </div>
                <div className="text-center text-danger mb-3">{error}</div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <button type="submit" onClick={googleSignIn} className="btn btn-primary mt-3">Google Sign Up</button>
            <p className="mt-3">Already have an account?<Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;