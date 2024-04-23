import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; // Ensure the path to your logo is correct

function Navbar({ progress }) {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 50px', backgroundColor: '#f8f9fa' }}>
      <button onClick={() => navigate('/')}>
        <img src={logo} alt="Company Logo" style={{ height: '50px' }} />
      </button>
      <div style={{ width: '50%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '10px' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#4caf50', borderRadius: '10px' }}></div>
      </div>
    </div>
  );
}

export default Navbar;
