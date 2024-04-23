import React, { useState } from 'react';

function AdditionalInfo() {
  const [info, setInfo] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true); // Show popup on form submit
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) {
      event.preventDefault(); // Prevent the default action to stop adding a new line
      handleSubmit(event); // Call handleSubmit to show the popup
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Please Add your Contact Information & Any Additional Information</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <textarea 
          value={info} 
          onChange={(e) => setInfo(e.target.value)} 
          onKeyDown={handleKeyDown}
          style={{
            width: '60%', // Control the width to make it look better
            height: '150px',
            padding: '10px',
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            resize: 'none',
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
          Submit
        </button>
      </form>
      {showPopup && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', zIndex: 1000 }}>
          <div style={{ fontSize: '24px', color: 'green', marginBottom: '10px' }}>✔️</div>
          <p>That's It, You're Finished!</p>
          <p>We will give you a call shortly.</p>
          <button onClick={() => setShowPopup(false)} style={{
            padding: '10px 20px',
            fontSize: '16px',
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s ease-in-out'
          }}>Close</button>
        </div>
      )}
    </div>
  );
}

export default AdditionalInfo;

