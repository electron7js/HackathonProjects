import React, { useState } from 'react';

function ProgressBar() {
  // State to store the input value and the progress
  const [percentage, setPercentage] = useState(0);

  // Handle the change in input field
  const handleInputChange = (event) => {
    const value = Math.min(Math.max(event.target.value, 1), 100); // Ensures value is between 1 and 100
    setPercentage(value);
  };

  return (
    <div className="progress-bar-container">
      <input
        type="number"
        value={percentage}
        onChange={handleInputChange}
        min="1"
        max="100"
        style={{ marginBottom: '20px' }}
      />
      <div className="progress-bar" style={{ width: '100%', height: '30px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <div
          className="progress"
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: '#4caf50',
            borderRadius: '5px',
          }}
        ></div>
      </div>
      <p>{percentage}%</p>
    </div>
  );
}

export default ProgressBar;
