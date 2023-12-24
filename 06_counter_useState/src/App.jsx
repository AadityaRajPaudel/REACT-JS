import React from "react"
import './app.css';

export default function App() {

  let [count, setCount] = React.useState(0);

  function addCount() {
    setCount(prevCount => prevCount+1);
  }

  function subCount() {
    setCount(prevCount => prevCount-1);
  }

  return (
    <div className="app-container">
      <button className="button" onClick={addCount}>+</button>
      <div className = "app-count">{count}</div>
      <button className="button" onClick={subCount}>-</button>
    </div>
  );
}