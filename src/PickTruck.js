import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import truck1 from './Truck1.png'; // Ensure path is correct
import truck2 from './Truck2.png'; // Ensure path is correct
import truck3 from './Truck3.png'; // Ensure path is correct

function PickTruck() {
  const [truck, setTruck] = useState('');
  const navigate = useNavigate();

  const trucks = [
    { name: "Pickup", image: truck1, value: "Truck A" },
    { name: "Pickup with Sides", image: truck2, value: "Truck B" },
    { name: "Pickup with Sides & Trailer", image: truck3, value: "Truck C" }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (truck) {
      navigate('/select-people');
    } else {
      alert('Please select a truck before submitting.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Pick Your Truck</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          {trucks.map((t) => (
            <label key={t.value} style={{ textAlign: 'center', cursor: 'pointer' }}>
              <input
                type="radio"
                value={t.value}
                checked={truck === t.value}
                onChange={() => setTruck(t.value)}
                style={{ display: 'none' }}
              />
              <div
                onClick={() => setTruck(t.value)}
                style={{
                  boxShadow: truck === t.value ? '0 0 15px rgba(0,0,255,0.5)' : '0 0 10px rgba(0,0,0,0.3)',
                  padding: '10px',
                  borderRadius: '10px',
                  transition: 'box-shadow 0.3s ease-in-out'
                }}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(0,0,255,0.5)'}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = truck === t.value ? '0 0 15px rgba(0,0,255,0.5)' : '0 0 10px rgba(0,0,0,0.3)'}
              >
                <img src={t.image} alt={`Image of ${t.name}`} style={{ width: "150px", height: "auto" }} />
                <h3>{t.name}</h3>
              </div>
            </label>
          ))}
        </div>
        <button
          type="submit"
          style={{
            marginTop: '20px',
            padding: '12px 20px',
            fontSize: '16px',
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s ease-in-out',
            width: '150px'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #2575fc, #6a11cb)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #6a11cb, #2575fc)'}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default PickTruck;
