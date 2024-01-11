import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ marginLeft: '10px' }}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;