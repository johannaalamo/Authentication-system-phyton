import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border shadow-sm bg-light">
        <h2 className="mb-4">¡Regístrate!</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword2" />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
        <div className="mt-3">
          <p>
            Already have an account?{' '}
            <Link to="/" className="btn btn-link">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
