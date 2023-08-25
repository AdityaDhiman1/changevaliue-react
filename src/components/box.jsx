import './box.css';
import { useState } from 'react';

function Box() {
  let [value,setvalue] = useState(0)
  function addValue() {
    
    value = value + 1
    setvalue(value)
  }
  function downValue() {
    value = value - 1
    setvalue(value)
  }
  
  return (
    <div className="container">
      <h1>counter  </h1>
      <h2>{ value}</h2>
      <div className="box">
        <button onClick={addValue}>UP</button>
        <button onClick={downValue}>Down</button>
      </div>
   </div>
  );
}

export default Box;
