import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  }, [navigate]);


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card border shadow-sm bg-light text-center" style={{ width: '18rem' }}>
        <h2 className="mb-4">¡Hola!</h2>
        <button
          className="btn btn-danger"
          onClick={() => {
            sessionStorage.removeItem('token');
            navigate('/login');
          }}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Private;
