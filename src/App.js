import React, { useState } from 'react';

function App() {
  const [angle, setAngle] = useState(0);

  const handleInputChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value)) {
      value = 0;
    }
    value = Math.max(0, Math.min(360, value)); 
    setAngle(value);
  };

  const handleSliderChange = (event) => {
    setAngle(parseInt(event.target.value, 10)); 
  };

  const handleRadioChange = (event) => {
    setAngle(parseInt(event.target.value, 10));
  };

  return (
    <div className="App">
      <input
        type="number"
        id="angle-input"
        value={angle}
        onChange={handleInputChange}
        min="0"
        max="360"
      /><br></br>
      <input
        type="range"
        id="angle-slider"
        className="slider"
        min="0"
        max="360"
        value={angle} // Adjust slider to show correct position
        onChange={handleSliderChange}
      />

      <div className="radio-group">
        {[0, 45, 60, 90, 180].map((val) => (
          <div key={val}>
            <input
              type="radio"
              id={`angle${val}`}
              name="angle-radio"
              value={val}
              checked={angle === val}
              onChange={handleRadioChange}
            />
            <label htmlFor={`angle${val}`}>{val}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
