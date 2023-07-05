import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [oddNumbers, setOddNumbers] = useState([]);
  const [evenNumbers, setEvenNumbers] = useState([]);
  const [sqNumbers, setSqNumbers] = useState([]);

  useEffect(() => {
    updateNumbers();
    oddNumber();
    evenNumber();
  }, [count]);

  const updateNumbers = () => {
    setNumbers([...numbers, count]);
    setSqNumbers([...sqNumbers, count * count]);
  };

  const oddNumber = () => {
    if (count % 2 !== 0) {
      setOddNumbers([...oddNumbers, count]);
    }
  };

  const evenNumber = () => {
    if (count % 2 === 0) {
      setEvenNumbers([...evenNumbers, count]);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
    setNumbers([]);
    setOddNumbers([]);
    setEvenNumbers([]);
    setSqNumbers([]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Counter App</h1>
      <h3>Value: {count}</h3>

      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <button onClick={incrementCount}>+1</button>
        <button onClick={decrementCount}>-1</button>
        <button onClick={resetCount}>0</button>
      </div>

      <h4>
        <div>Number:
          <div className="column">{numbers.map((number, index) => (
              <span key={index}>{number}</span> ))}
          </div></div>
        <div>ODD Numbers: 
          <div className="column">{oddNumbers.map((number, index) => (
              <span key={index}>{number}</span> ))}
          </div></div>
        <div>EVEN Numbers: 
        <div className="column">{evenNumbers.map((number, index) => (
              <span key={index}>{number}</span> ))}
          </div>
        </div>
        <div>Square Numbers: 
        <div className="column">{sqNumbers.map((number, index) => (
              <span key={index}>{number}</span> ))}
          </div>
        </div>
      </h4>
    </div>
  );
}

export default App;
