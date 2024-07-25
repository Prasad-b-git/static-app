import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowAlert(true), 5000);
  }, []);

  return (
    <div className="App">
      {showAlert ? (
        <div className="alert">
          <h1>Virus Detected!</h1>
          <p>Your computer is infected with a virus!</p>
          <button onClick={() => setShowAlert(false)}>Close</button>
        </div>
      ) : (
        <h1>Welcome to My App</h1>
      )}
    </div>
  );
}

export default App;
