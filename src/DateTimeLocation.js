import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DateTimeLocation() {
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDate) { // Ensure a date has been selected
      navigate('/additional-info'); // Navigate to AdditionalInfo component
    } else {
      alert('Please select a date and time before submitting.'); // Alert if no date is selected
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Select Date and Time</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="date-time" style={{ marginBottom: '10px' }}>
          When do you need us?
        </label>
        <input
          type="datetime-local"
          id="date-time"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            fontSize: '16px',
            padding: '10px',
            width: '250px', // Control the width of the input
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px'
          }}
        />
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

export default DateTimeLocation;
