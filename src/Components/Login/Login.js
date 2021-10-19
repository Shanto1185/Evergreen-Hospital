import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn,handleLogIn,handleEmail,handlePassword} = useAuth();
    return (
        <div className="containerm mt-5">
            <h1 className="text-primary text-center fw-bold my-5">Login</h1>
             <form onSubmit={handleLogIn}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email : </label>
                        <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control w-75" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                        <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control w-75" id="inputPassword3"/>
                        </div>
                </div>
                    <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <button type="submit" onClick={googleSignIn} className="btn btn-primary mt-3">Google Sign In</button>
            <p className="mt-3">New to clinically?<Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;