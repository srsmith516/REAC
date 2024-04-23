import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadIcon from './upload-icon.png';
import { storage } from './firebase-config';

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
      const uploadPath = `images/${image.name}`;
      const fileRef = storage.ref(uploadPath);
      try {
        const fileSnapshot = await fileRef.put(image);
        const imageUrl = await fileSnapshot.ref.getDownloadURL();
        console.log('File available at', imageUrl);
        navigate('/text');
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Failed to upload image.');
      }
    } else {
      alert('Please select an image to upload.');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ textAlign: 'center', padding: '100px 50px' }}>
      <h1 style={{ margin: '0 0 50px' }}>Upload an Image of your Junk</h1>
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
            marginBottom: '30px' 
          }}
        >
          <div style={{ textAlign: 'center', marginTop: '130px' }}>Choose File</div>
        </button>
        <button 
          type="submit" 
          style={{ 
            display: 'block', 
            marginTop: '20px', 
            padding: '10px 20px', 
            fontSize: '16px', 
            background: 'linear-gradient(to right, #6a11cb, #2575fc)', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s ease-in-out',
            width: '120px' 
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default ImageUpload;
