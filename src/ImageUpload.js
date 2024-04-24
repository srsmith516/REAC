import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadIcon from './upload-icon.png'; // Ensure this path is correct

function ImageUpload() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (image) {
      // Create a FormData instance to send the uploaded file
      const formData = new FormData();
      formData.append('file', image);

      try {
        const response = await fetch('https://worldofhealth.club/react/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await response.text();
        console.log(result);
        alert('File uploaded successfully');
        navigate('/text'); // Navigate to TextBlock component
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Upload failed');
      }
    } else {
      alert('Please select an image to upload.');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ textAlign: 'center', padding: '100px 50px' }}> {/* Increased outer padding */}
      <h1 style={{ margin: '0 0 50px' }}>Upload an Image of your Junk</h1> {/* Increased margin below header */}
      <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
        <input 
          type="file" 
          onChange={handleImageChange} 
          style={{ display: 'none' }} 
          ref={fileInputRef} 
        />
        <button 
          type="button" 
          onClick={handleButtonClick} 
          style={{ 
            border: 'none', 
            background: `url(${uploadIcon}) no-repeat center center`, 
            backgroundSize: 'cover', 
            width: '120px', 
            height: '120px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            cursor: 'pointer', 
            transition: 'box-shadow 0.3s ease-in-out',
            marginBottom: '30px' // Increased margin between buttons
          }}
          onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'}
        >
          <div style={{ textAlign: 'center', marginTop: '130px' }}>Choose File</div>
        </button>
        <button 
          type="submit" 
          style={{ 
            display: 'block', 
            marginTop: '20px', // Increased margin for clearer separation
            padding: '10px 20px', 
            fontSize: '16px', 
            background: 'linear-gradient(to right, #6a11cb, #2575fc)', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s ease-in-out',
            width: '120px' // Ensure alignment and consistency
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #2575fc, #6a11cb)'}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default ImageUpload;