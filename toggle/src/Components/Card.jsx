// Card.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Card = () => {
  const { theme } = useTheme();

  const cardStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '10px',
    margin: '10px',
    borderRadius: '4px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={cardStyle}>
      <h2>Card Component</h2>
      <p>This is a card component that changes its style based on the theme.</p>
    </div>
  );
};

export default Card;
