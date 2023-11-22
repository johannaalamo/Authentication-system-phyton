import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authUser.js'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    try {
      const data = await registerUser(email, password);

      if (data.message === 'User successfully registered') {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border shadow-sm bg-light" onSubmit={handleSubmit}>
        <h2 className="mb-4">¡Regístrate!</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
        <div className="mt-3">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="btn btn-link">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
