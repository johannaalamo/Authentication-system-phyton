import React from 'react';

const Logout = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="card border shadow-sm bg-light text-center" style={{ width: '18rem' }}>
        <h2 className="mb-4">¡Hola!</h2>
        <button className="btn btn-danger">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Logout;
