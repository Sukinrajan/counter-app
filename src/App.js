import React, { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [oddNumbers, setOddNumbers] = useState([]);
  const [evenNumbers, setEvenNumbers] = useState([]);
  const [sqNumbers, setSqNumbers] = useState([]);

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
    count = count + 1;
    setCount(count);
    updateNumbers();
    oddNumber();
    evenNumber();
  };

  const decrementCount = () => {
    if (count > 0) {
      count = count - 1;
      setCount(count);
      updateNumbers();
      oddNumber();
    evenNumber();
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
        <div>Number: {numbers.join(", ")}</div>
        <div>ODD Numbers: {oddNumbers.join(", ")}</div>
        <div>EVEN Numbers: {evenNumbers.join(", ")}</div>
        <div>Square Numbers: {sqNumbers.join(", ")}</div>
      </h4>
    </div>
  );
}

export default App;
