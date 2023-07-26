import React from 'react';

const DarkModeToggle = ({ darkMode, onDarkModeToggle }) => {
  return (
    <button onClick={onDarkModeToggle}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
