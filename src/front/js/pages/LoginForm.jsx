import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authUser';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.error('Email and password are required');
      return;
    }

    const result = await loginUser(email, password);

    if (result.message === 'Login successful') {
      console.log('Login successful');

      sessionStorage.setItem('token', result.token);
      navigate('/private');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border shadow-sm bg-light" onSubmit={handleLogin}>
        <h2 className="mb-4">¡Hola! Inicia sesión</h2>
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
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
        <div className="mt-3">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="btn btn-link">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
