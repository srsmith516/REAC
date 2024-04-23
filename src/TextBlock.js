import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TextBlock() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const categories = [
    { label: "Construction/Demolition", icon: "🚧" },
    { label: "General", icon: "📦" },
    { label: "Special Handling (Paint, Carpet, Chemicals, etc.)", icon: "🧪" },
    { label: "Food Material", icon: "🍏" },
    { label: "Green Material", icon: "🌿" },
    { label: "Wood", icon: "🪵" }
  ];

  const handleSelectCategory = (category) => {
    const currentIndex = selectedCategories.indexOf(category);
    const newSelectedCategories = [...selectedCategories];

    if (currentIndex === -1) {
      newSelectedCategories.push(category);
    } else {
      newSelectedCategories.splice(currentIndex, 1);
    }

    setSelectedCategories(newSelectedCategories);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCategories.length > 0) {
      navigate('/pick-truck'); // Navigate to the next component
    } else {
      alert('Please select at least one category before submitting.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>What kind of junk do you have?</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: '600px' }}>
        {categories.map((category) => (
          <button
            key={category.label}
            type="button"
            onClick={() => handleSelectCategory(category.label)}
            style={{
              aspectRatio: '1 / 1', // Ensures the button is square
              padding: '10px',
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              color: 'white',
              background: selectedCategories.includes(category.label) ? 'linear-gradient(to right, #fc466b, #3f5efb)' : 'linear-gradient(to right, #6a11cb, #2575fc)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            {category.icon} {category.label}
          </button>
        ))}
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
            gridColumn: '2'
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

export default TextBlock;
