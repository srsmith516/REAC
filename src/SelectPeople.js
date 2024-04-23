import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectPeople() {
  const [people, setPeople] = useState('');
  const navigate = useNavigate();

  const options = [
    { label: "1 person", value: "1 person", icon: "👤" }, // Placeholder icons
    { label: "2 persons", value: "2 persons", icon: "👥" },
    { label: "3 persons", value: "3 persons", icon: "👤👤👤" },
    { label: "4 persons", value: "4 persons", icon: "👥👥" }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (people) {
      navigate('/date-time-location'); // Navigate to DateTimeLocation component
    } else {
      alert('Please select the number of people before submitting.'); // Alert if no selection is made
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>How many Pairs of Hands do you need?</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: '20px' }}>
          {options.map((option) => (
            <label key={option.value} style={{ textAlign: 'center', cursor: 'pointer', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>
              <input
                type="radio"
                value={option.value}
                checked={people === option.value}
                onChange={() => setPeople(option.value)}
                style={{ display: 'none' }}
              />
              <div
                onClick={() => setPeople(option.value)}
                style={{
                  boxShadow: people === option.value ? '0 0 15px rgba(0,0,255,0.5)' : '0 0 10px rgba(0,0,0,0.3)',
                  padding: '10px',
                  borderRadius: '10px',
                  transition: 'box-shadow 0.3s ease-in-out'
                }}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(0,0,255,0.5)'}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = people === option.value ? '0 0 15px rgba(0,0,255,0.5)' : '0 0 10px rgba(0,0,0,0.3)'}
              >
                <span style={{ fontSize: '24px' }}>{option.icon}</span><br />
                {option.label}
              </div>
            </label>
          ))}
        </div>
        <button
          type="submit"
          style={{
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

export default SelectPeople;
