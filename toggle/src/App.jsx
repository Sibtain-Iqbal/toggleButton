// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import Card from './Components/Card';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Dark/Light Theme Example</h1>
        <ThemeToggle />
        <Card />
      </div>
    </ThemeProvider>
  );
};

export default App;
