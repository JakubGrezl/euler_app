// Main application file (App.jsx)
import React, { useState } from 'react';
import './index.css';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const factorize = () => {
    const num = parseFloat(number);
    if (!number || isNaN(num) || num < 2) {
      setResult('Zadejte platné číslo větší než 1.');
      return;
    }
    const numInt = parseInt(number, 10);
    const factors = [];
    let n = numInt;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    if (n > 1) {
      factors.push(n);
    }
    setResult(factors.join(' × '));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Rozklad na prvočísla</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Zadejte číslo"
        className="app-input"
      />
      <button
        onClick={factorize}
        className="app-button"
      >
        Rozložit na prvočísla
      </button>
      {result && (
        <div className="app-result">
          <strong>Výsledek:</strong> {result}
        </div>
      )}
    </div>
  );
}


export default App;